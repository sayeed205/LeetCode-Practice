use anyhow::{Context, Result, anyhow, bail};
use serde::Deserialize;
use serde_json::Value;
use std::collections::{BTreeMap, BTreeSet};
use std::ffi::OsStr;
use std::fs;
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::{Duration, Instant};
use walkdir::WalkDir;

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Config {
    #[serde(default = "default_timeout_ms")]
    pub default_timeout_ms: u64,
    #[serde(default = "default_ignore_dirs")]
    pub ignore_dirs: Vec<String>,
    #[serde(default = "default_cleanup_tmp")]
    pub cleanup_tmp: bool,
    #[serde(default = "default_runners")]
    pub runners: BTreeMap<String, Vec<String>>,
}

fn default_timeout_ms() -> u64 {
    5000
}

fn default_cleanup_tmp() -> bool {
    true
}

fn default_ignore_dirs() -> Vec<String> {
    [
        ".git",
        ".idea",
        ".vscode",
        ".runner",
        "target",
        "node_modules",
    ]
    .into_iter()
    .map(String::from)
    .collect()
}

fn default_runners() -> BTreeMap<String, Vec<String>> {
    BTreeMap::from([
        (
            "python".to_string(),
            vec!["uv run python", "python3", "python", "py"]
                .into_iter()
                .map(String::from)
                .collect(),
        ),
        (
            "javascript".to_string(),
            vec!["bun", "node", "deno run --allow-read"]
                .into_iter()
                .map(String::from)
                .collect(),
        ),
        (
            "typescript".to_string(),
            vec!["bun", "deno run --allow-read", "tsx"]
                .into_iter()
                .map(String::from)
                .collect(),
        ),
        (
            "rust".to_string(),
            vec!["cargo", "rustc"]
                .into_iter()
                .map(String::from)
                .collect(),
        ),
    ])
}

impl Default for Config {
    fn default() -> Self {
        Self {
            default_timeout_ms: default_timeout_ms(),
            ignore_dirs: default_ignore_dirs(),
            cleanup_tmp: default_cleanup_tmp(),
            runners: default_runners(),
        }
    }
}

impl Config {
    pub fn load(root: &Path) -> Result<Self> {
        let path = root.join("runner.config.json");
        if !path.exists() {
            return Ok(Self::default());
        }

        let text = fs::read_to_string(&path)
            .with_context(|| format!("failed to read {}", path.display()))?;
        serde_json::from_str(&text).with_context(|| format!("invalid JSON in {}", path.display()))
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub enum Language {
    JavaScript,
    TypeScript,
    Python,
    Rust,
}

impl Language {
    pub fn from_extension(ext: &str) -> Option<Self> {
        match ext {
            "js" => Some(Self::JavaScript),
            "ts" => Some(Self::TypeScript),
            "py" => Some(Self::Python),
            "rs" => Some(Self::Rust),
            _ => None,
        }
    }

    pub fn key(self) -> &'static str {
        match self {
            Self::JavaScript => "javascript",
            Self::TypeScript => "typescript",
            Self::Python => "python",
            Self::Rust => "rust",
        }
    }

    pub fn label(self) -> &'static str {
        match self {
            Self::JavaScript => "JavaScript",
            Self::TypeScript => "TypeScript",
            Self::Python => "Python",
            Self::Rust => "Rust",
        }
    }
}

#[derive(Debug, Clone)]
pub struct SolutionFile {
    pub language: Language,
    pub path: PathBuf,
}

#[derive(Debug, Clone)]
pub struct Problem {
    pub difficulty: String,
    pub name: String,
    pub path: PathBuf,
    pub test_file: Option<PathBuf>,
    pub solutions: Vec<SolutionFile>,
}

pub fn discover_problems(root: &Path, config: &Config) -> Result<Vec<Problem>> {
    let ignore: BTreeSet<&str> = config.ignore_dirs.iter().map(String::as_str).collect();
    let mut by_dir: BTreeMap<PathBuf, Problem> = BTreeMap::new();

    for entry in WalkDir::new(root)
        .min_depth(2)
        .into_iter()
        .filter_entry(|entry| !ignore.contains(entry.file_name().to_string_lossy().as_ref()))
    {
        let entry = entry?;
        if !entry.file_type().is_file() {
            continue;
        }

        let path = entry.path();
        let Some(problem_dir) = path.parent() else {
            continue;
        };
        let Some(difficulty_dir) = problem_dir.parent() else {
            continue;
        };
        if difficulty_dir == root || difficulty_dir.parent() != Some(root) {
            continue;
        }

        let difficulty = difficulty_dir
            .file_name()
            .and_then(OsStr::to_str)
            .unwrap_or_default()
            .to_string();
        let problem_name = problem_dir
            .file_name()
            .and_then(OsStr::to_str)
            .unwrap_or_default()
            .to_string();

        let problem = by_dir.entry(problem_dir.to_path_buf()).or_insert(Problem {
            difficulty,
            name: problem_name,
            path: problem_dir.to_path_buf(),
            test_file: None,
            solutions: Vec::new(),
        });

        let file_name = path.file_name().and_then(OsStr::to_str).unwrap_or_default();
        if file_name.ends_with(".test.json") {
            problem.test_file = Some(path.to_path_buf());
            continue;
        }

        if let Some(ext) = path.extension().and_then(OsStr::to_str) {
            if let Some(language) = Language::from_extension(ext) {
                problem.solutions.push(SolutionFile {
                    language,
                    path: path.to_path_buf(),
                });
            }
        }
    }

    let mut problems: Vec<_> = by_dir
        .into_values()
        .filter(|problem| !problem.solutions.is_empty())
        .collect();

    for problem in &mut problems {
        problem.solutions.sort_by_key(|solution| solution.language);
    }

    problems.sort_by(|a, b| (&a.difficulty, &a.name).cmp(&(&b.difficulty, &b.name)));
    Ok(problems)
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum TestMode {
    Stdin,
    Args,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TestSuite {
    pub mode: TestMode,
    #[serde(default, deserialize_with = "deserialize_function_names")]
    pub function: Vec<String>,
    #[serde(default)]
    pub cases: Vec<TestCase>,
    #[serde(default)]
    pub tests: Vec<TestCase>,
}

#[derive(Debug, Deserialize)]
#[serde(untagged)]
enum FunctionNamesField {
    One(String),
    Many(Vec<String>),
}

fn deserialize_function_names<'de, D>(deserializer: D) -> std::result::Result<Vec<String>, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let field = Option::<FunctionNamesField>::deserialize(deserializer)?;
    Ok(match field {
        Some(FunctionNamesField::One(name)) => vec![name],
        Some(FunctionNamesField::Many(names)) => names,
        None => Vec::new(),
    })
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TestCase {
    #[serde(default)]
    pub name: Option<String>,
    #[serde(default, alias = "input")]
    pub stdin: Option<Value>,
    #[serde(default)]
    pub args: Option<Vec<Value>>,
    pub expected: Value,
    #[serde(default, alias = "timeout")]
    pub timeout_ms: Option<u64>,
}

impl TestSuite {
    pub fn load(path: &Path) -> Result<Self> {
        let text = fs::read_to_string(path)
            .with_context(|| format!("failed to read test file {}", path.display()))?;
        let mut suite: Self = serde_json::from_str(&text)
            .with_context(|| format!("invalid .test.json file {}", path.display()))?;
        if suite.cases.is_empty() && !suite.tests.is_empty() {
            suite.cases = suite.tests;
            suite.tests = Vec::new();
        }
        if suite.cases.is_empty() {
            bail!("test file {} contains no cases", path.display());
        }
        Ok(suite)
    }
}

#[derive(Debug, Clone)]
pub struct CaseResult {
    pub index: usize,
    pub name: String,
    pub passed: bool,
    pub duration: Duration,
    pub expected: Value,
    pub actual: Option<Value>,
    pub stdout: String,
    pub stderr: String,
    pub error: Option<String>,
}

#[derive(Debug, Clone)]
pub struct RunReport {
    pub language: Language,
    pub solution: PathBuf,
    pub total_duration: Duration,
    pub cases: Vec<CaseResult>,
}

impl RunReport {
    pub fn passed(&self) -> usize {
        self.cases.iter().filter(|case| case.passed).count()
    }
}

pub fn run_solution(
    root: &Path,
    config: &Config,
    solution: &SolutionFile,
    suite: &TestSuite,
) -> Result<RunReport> {
    let start = Instant::now();
    let cases = suite
        .cases
        .iter()
        .enumerate()
        .map(|(index, case)| run_case(root, config, solution, suite, index, case))
        .collect::<Vec<_>>();

    Ok(RunReport {
        language: solution.language,
        solution: solution.path.clone(),
        total_duration: start.elapsed(),
        cases,
    })
}

fn run_case(
    root: &Path,
    config: &Config,
    solution: &SolutionFile,
    suite: &TestSuite,
    index: usize,
    case: &TestCase,
) -> CaseResult {
    let timeout = Duration::from_millis(case.timeout_ms.unwrap_or(config.default_timeout_ms));
    let name = case
        .name
        .clone()
        .unwrap_or_else(|| format!("case {}", index + 1));
    let start = Instant::now();
    let result = match suite.mode {
        TestMode::Stdin => run_stdin_case(config, solution, case, timeout),
        TestMode::Args => run_args_case(root, config, solution, suite, case, timeout),
    };

    match result {
        Ok(output) => {
            let actual = parse_output_as_json(&output.stdout);
            let (passed, error) = match actual.as_ref() {
                Ok(value) if value == &case.expected => (true, None),
                Ok(value) => (
                    false,
                    Some(format!(
                        "expected {}, got {}",
                        json_display(&case.expected),
                        json_display(value)
                    )),
                ),
                Err(error) => (false, Some(error.to_string())),
            };

            CaseResult {
                index,
                name,
                passed,
                duration: start.elapsed(),
                expected: case.expected.clone(),
                actual: actual.ok(),
                stdout: output.stdout,
                stderr: output.stderr,
                error,
            }
        }
        Err(error) => CaseResult {
            index,
            name,
            passed: false,
            duration: start.elapsed(),
            expected: case.expected.clone(),
            actual: None,
            stdout: String::new(),
            stderr: String::new(),
            error: Some(error.to_string()),
        },
    }
}

#[derive(Debug)]
struct ProcessOutput {
    stdout: String,
    stderr: String,
}

fn run_stdin_case(
    config: &Config,
    solution: &SolutionFile,
    case: &TestCase,
    timeout: Duration,
) -> Result<ProcessOutput> {
    let command = find_runner(config, solution.language)?;
    let stdin = value_to_stdin(case.stdin.as_ref())?;

    match solution.language {
        Language::Rust if command.first().is_some_and(|cmd| cmd == "rustc") => {
            run_rustc_case(&command, &solution.path, &stdin, timeout)
        }
        Language::Rust => bail!(
            "cargo execution for standalone LeetCode files is not supported yet; configure rust runner as rustc or use stdin executable files"
        ),
        _ => {
            let mut args = command.clone();
            args.push(solution.path.display().to_string());
            run_command(&args, Some(stdin), timeout, solution.path.parent())
        }
    }
}

fn run_args_case(
    root: &Path,
    config: &Config,
    solution: &SolutionFile,
    suite: &TestSuite,
    case: &TestCase,
    timeout: Duration,
) -> Result<ProcessOutput> {
    let functions = (!suite.function.is_empty())
        .then_some(suite.function.as_slice())
        .ok_or_else(|| anyhow!("args mode requires a top-level function field in .test.json"))?;
    let args = case
        .args
        .as_ref()
        .ok_or_else(|| anyhow!("args mode case requires args"))?;
    let tmp_dir = root.join(".runner").join("tmp");
    fs::create_dir_all(&tmp_dir)
        .with_context(|| format!("failed to create temp directory {}", tmp_dir.display()))?;

    if solution.language == Language::Rust {
        return run_rust_args_case(config, solution, functions, args, timeout, &tmp_dir);
    }

    let command = find_runner(config, solution.language)?;
    let wrapper = match solution.language {
        Language::Python => write_python_wrapper(&tmp_dir, solution, functions, args)?,
        Language::JavaScript => {
            write_javascript_wrapper(&tmp_dir, solution, functions, args, false)?
        }
        Language::TypeScript => {
            write_javascript_wrapper(&tmp_dir, solution, functions, args, true)?
        }
        Language::Rust => unreachable!("handled above"),
    };

    let mut full_command = command;
    full_command.push(wrapper.display().to_string());
    let output = run_command(&full_command, None, timeout, Some(&tmp_dir));

    if config.cleanup_tmp {
        let _ = fs::remove_file(wrapper);
    }

    output
}

fn find_runner(config: &Config, language: Language) -> Result<Vec<String>> {
    let configured = config
        .runners
        .get(language.key())
        .ok_or_else(|| anyhow!("no runner commands configured for {}", language.label()))?;

    for candidate in configured {
        let parts = shell_words::split(candidate)
            .with_context(|| format!("invalid runner command {candidate:?}"))?;
        if parts.is_empty() {
            continue;
        }
        if command_exists(&parts[0]) {
            return Ok(parts);
        }
    }

    bail!(
        "no runner found for {}. Tried: {}",
        language.label(),
        configured.join(", ")
    )
}

fn find_rustc(config: &Config) -> Result<Vec<String>> {
    if let Some(configured) = config.runners.get(Language::Rust.key()) {
        for candidate in configured {
            let parts = shell_words::split(candidate)
                .with_context(|| format!("invalid runner command {candidate:?}"))?;
            if parts.first().is_some_and(|command| command == "rustc") && command_exists("rustc") {
                return Ok(parts);
            }
        }
    }

    if command_exists("rustc") {
        return Ok(vec!["rustc".to_string()]);
    }

    bail!("no rustc runner found for Rust args mode")
}

fn command_exists(command: &str) -> bool {
    if command.contains(std::path::MAIN_SEPARATOR) {
        return Path::new(command).is_file();
    }
    std::env::var_os("PATH")
        .into_iter()
        .flat_map(|paths| std::env::split_paths(&paths).collect::<Vec<_>>())
        .any(|path| path.join(command).is_file())
}

fn run_command(
    args: &[String],
    stdin: Option<String>,
    timeout: Duration,
    current_dir: Option<&Path>,
) -> Result<ProcessOutput> {
    if args.is_empty() {
        bail!("empty command");
    }

    let mut command = Command::new(&args[0]);
    command.args(&args[1..]);
    if let Some(current_dir) = current_dir {
        command.current_dir(current_dir);
    }
    command.stdout(Stdio::piped()).stderr(Stdio::piped());
    if stdin.is_some() {
        command.stdin(Stdio::piped());
    }

    let mut child = command
        .spawn()
        .with_context(|| format!("failed to start command: {}", args.join(" ")))?;

    if let Some(stdin_text) = stdin {
        if let Some(mut child_stdin) = child.stdin.take() {
            child_stdin
                .write_all(stdin_text.as_bytes())
                .context("failed to write stdin")?;
        }
    }

    let started = Instant::now();
    loop {
        if let Some(_status) = child.try_wait().context("failed to wait for process")? {
            let output = child
                .wait_with_output()
                .context("failed to read process output")?;
            let stdout = String::from_utf8_lossy(&output.stdout).to_string();
            let stderr = String::from_utf8_lossy(&output.stderr).to_string();
            if !output.status.success() {
                bail!(
                    "command failed with status {}\nstdout:\n{}\nstderr:\n{}",
                    output.status,
                    stdout.trim(),
                    stderr.trim()
                );
            }
            return Ok(ProcessOutput { stdout, stderr });
        }

        if started.elapsed() > timeout {
            let _ = child.kill();
            let _ = child.wait();
            bail!("test timed out after {} ms", timeout.as_millis());
        }

        std::thread::sleep(Duration::from_millis(10));
    }
}

fn run_rustc_case(
    command: &[String],
    solution: &Path,
    stdin: &str,
    timeout: Duration,
) -> Result<ProcessOutput> {
    let tmp_binary = std::env::temp_dir().join(format!(
        "leetcode-runner-{}",
        Instant::now().elapsed().as_nanos()
    ));
    let mut compile = command.to_vec();
    compile.push(solution.display().to_string());
    compile.push("-o".to_string());
    compile.push(tmp_binary.display().to_string());
    run_command(&compile, None, timeout, solution.parent())?;

    let run_args = vec![tmp_binary.display().to_string()];
    let output = run_command(
        &run_args,
        Some(stdin.to_string()),
        timeout,
        solution.parent(),
    );
    let _ = fs::remove_file(tmp_binary);
    output
}

fn run_rust_args_case(
    config: &Config,
    solution: &SolutionFile,
    functions: &[String],
    args: &[Value],
    timeout: Duration,
    tmp_dir: &Path,
) -> Result<ProcessOutput> {
    let rustc = find_rustc(config)?;
    let mut failures = Vec::new();

    for function in functions.iter().filter(|name| is_rust_identifier(name)) {
        let wrapper = write_rust_wrapper(tmp_dir, solution, function, args)?;
        let binary = tmp_dir.join(format!("rust_wrapper_{function}"));

        let mut compile = rustc.clone();
        compile.push(wrapper.display().to_string());
        compile.push("-o".to_string());
        compile.push(binary.display().to_string());

        match run_command(&compile, None, timeout, Some(tmp_dir)) {
            Ok(_) => {
                let output = run_command(
                    &[binary.display().to_string()],
                    None,
                    timeout,
                    Some(tmp_dir),
                );
                if config.cleanup_tmp {
                    let _ = fs::remove_file(wrapper);
                    let _ = fs::remove_file(binary);
                }
                return output;
            }
            Err(error) => {
                failures.push(format!("{function}: {error}"));
                if config.cleanup_tmp {
                    let _ = fs::remove_file(wrapper);
                    let _ = fs::remove_file(binary);
                }
            }
        }
    }

    if failures.is_empty() {
        bail!(
            "no valid Rust function names in .test.json: {:?}",
            functions
        );
    }

    bail!(
        "none of the Rust functions compiled: {}",
        failures.join("\n---\n")
    )
}

fn is_rust_identifier(name: &str) -> bool {
    let mut chars = name.chars();
    let Some(first) = chars.next() else {
        return false;
    };
    (first == '_' || first.is_ascii_alphabetic())
        && chars.all(|character| character == '_' || character.is_ascii_alphanumeric())
}

fn write_rust_wrapper(
    tmp_dir: &Path,
    solution: &SolutionFile,
    function: &str,
    args: &[Value],
) -> Result<PathBuf> {
    let wrapper = tmp_dir.join(format!("rust_wrapper_{function}.rs"));
    let solution_path = serde_json::to_string(&solution.path.display().to_string())?;
    let args = args
        .iter()
        .map(json_to_rust_literal)
        .collect::<Result<Vec<_>>>()?
        .join(", ");

    fs::write(
        &wrapper,
        format!(
            r#"struct Solution;
include!({solution_path});

trait RunnerJson {{
    fn runner_json(&self) -> String;
}}

macro_rules! impl_runner_json_display {{
    ($($ty:ty),* $(,)?) => {{
        $(impl RunnerJson for $ty {{
            fn runner_json(&self) -> String {{ self.to_string() }}
        }})*
    }};
}}

impl_runner_json_display!(i8, i16, i32, i64, i128, isize, u8, u16, u32, u64, u128, usize, f32, f64, bool);

impl RunnerJson for String {{
    fn runner_json(&self) -> String {{ format!("{{:?}}", self) }}
}}

impl RunnerJson for &str {{
    fn runner_json(&self) -> String {{ format!("{{:?}}", self) }}
}}

impl<T: RunnerJson> RunnerJson for Vec<T> {{
    fn runner_json(&self) -> String {{
        let items = self.iter().map(RunnerJson::runner_json).collect::<Vec<_>>().join(",");
        format!("[{{}}]", items)
    }}
}}

impl<T: RunnerJson> RunnerJson for Option<T> {{
    fn runner_json(&self) -> String {{
        match self {{
            Some(value) => value.runner_json(),
            None => "null".to_string(),
        }}
    }}
}}

fn main() {{
    let result = Solution::{function}({args});
    println!("{{}}", result.runner_json());
}}
"#
        ),
    )?;
    Ok(wrapper)
}

fn json_to_rust_literal(value: &Value) -> Result<String> {
    Ok(match value {
        Value::Null => "None".to_string(),
        Value::Bool(value) => value.to_string(),
        Value::Number(value) => value.to_string(),
        Value::String(value) => format!("{}.to_string()", serde_json::to_string(value)?),
        Value::Array(values) => format!(
            "vec![{}]",
            values
                .iter()
                .map(json_to_rust_literal)
                .collect::<Result<Vec<_>>>()?
                .join(", ")
        ),
        Value::Object(_) => bail!("object args are not supported for Rust args mode yet"),
    })
}

fn write_python_wrapper(
    tmp_dir: &Path,
    solution: &SolutionFile,
    functions: &[String],
    args: &[Value],
) -> Result<PathBuf> {
    let wrapper = tmp_dir.join("python_wrapper.py");
    let solution_path = serde_json::to_string(&solution.path.display().to_string())?;
    let functions_json = serde_json::to_string(functions)?;
    let args_json = serde_json::to_string(args)?;
    fs::write(
        &wrapper,
        format!(
            r#"import json
import runpy

ns = runpy.run_path({solution_path})
function_names = {functions_json}
args = json.loads({args_json:?})

target = None
matched_function_name = None
for function_name in function_names:
    target = ns.get(function_name)
    if target is None and "Solution" in ns:
        target = getattr(ns["Solution"](), function_name, None)
    if target is not None:
        matched_function_name = function_name
        break
if target is None:
    raise AttributeError(f"None of {{function_names}} found as top-level function or Solution method")

print(json.dumps(target(*args), separators=(",", ":")))
"#
        ),
    )?;
    Ok(wrapper)
}

fn write_javascript_wrapper(
    tmp_dir: &Path,
    solution: &SolutionFile,
    functions: &[String],
    args: &[Value],
    typescript: bool,
) -> Result<PathBuf> {
    let ext = if typescript { "ts" } else { "js" };
    let wrapper = tmp_dir.join(format!("javascript_wrapper.{ext}"));
    let source = fs::read_to_string(&solution.path)
        .with_context(|| format!("failed to read {}", solution.path.display()))?;
    let args_json = serde_json::to_string(args)?;
    let functions_json = serde_json::to_string(functions)?;
    fs::write(
        &wrapper,
        format!(
            r#"{source}

const __runnerFunctionNames = {functions_json};
const __runnerArgs = {args_json};
let __runnerTarget;
let __runnerFunctionName;
for (const name of __runnerFunctionNames) {{
  __runnerTarget = globalThis[name];
  if (typeof __runnerTarget !== "function") {{
    try {{
      __runnerTarget = eval(name);
    }} catch (_) {{
      __runnerTarget = undefined;
    }}
  }}
  if (typeof __runnerTarget === "function") {{
    __runnerFunctionName = name;
    break;
  }}
}}
if (typeof __runnerTarget !== "function") {{
  throw new Error(`None of ${{JSON.stringify(__runnerFunctionNames)}} found`);
}}
const __runnerResult = __runnerTarget(...__runnerArgs);
Promise.resolve(__runnerResult).then((value) => {{
  console.log(JSON.stringify(value));
}}).catch((error) => {{
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
}});
"#
        ),
    )?;
    Ok(wrapper)
}

fn value_to_stdin(value: Option<&Value>) -> Result<String> {
    match value {
        None | Some(Value::Null) => Ok(String::new()),
        Some(Value::String(text)) => Ok(text.clone()),
        Some(value) => Ok(serde_json::to_string(value)?),
    }
}

fn parse_output_as_json(stdout: &str) -> Result<Value> {
    let trimmed = stdout.trim();
    if trimmed.is_empty() {
        bail!("program produced no stdout; expected JSON output");
    }
    serde_json::from_str(trimmed).with_context(|| format!("stdout is not valid JSON: {trimmed:?}"))
}

pub fn json_display(value: &Value) -> String {
    serde_json::to_string(value).unwrap_or_else(|_| value.to_string())
}

pub fn format_report(report: &RunReport) -> String {
    let mut output = String::new();
    output.push_str(&format!(
        "\n{} results for {}\n",
        report.language.label(),
        report.solution.display()
    ));
    output.push_str(&format!(
        "Passed {}/{} in {:.2?}\n",
        report.passed(),
        report.cases.len(),
        report.total_duration
    ));

    for case in &report.cases {
        let mark = if case.passed { "✓" } else { "✗" };
        output.push_str(&format!(
            "  {mark} #{} {} ({:.2?})\n",
            case.index + 1,
            case.name,
            case.duration
        ));
        if !case.passed {
            output.push_str(&format!("    expected: {}\n", json_display(&case.expected)));
            if let Some(actual) = &case.actual {
                output.push_str(&format!("    actual:   {}\n", json_display(actual)));
            }
            if let Some(error) = &case.error {
                output.push_str(&format!(
                    "    error:    {}\n",
                    error.replace('\n', "\n              ")
                ));
            }
            if !case.stderr.trim().is_empty() {
                output.push_str(&format!("    stderr:   {}\n", case.stderr.trim()));
            }
        }
    }

    output
}

#[cfg(test)]
mod tests {
    use super::*;
    use tempfile::tempdir;

    #[test]
    fn discovers_supported_solution_files_and_tests() {
        let tmp = tempdir().unwrap();
        let problem = tmp.path().join("Easy/1. Two Sum");
        fs::create_dir_all(&problem).unwrap();
        fs::write(problem.join("1. Two Sum.py"), "def twoSum(): pass").unwrap();
        fs::write(problem.join("1. Two Sum.java"), "class Solution {}").unwrap();
        fs::write(
            problem.join("1. Two Sum.test.json"),
            r#"{"mode":"args","cases":[]}"#,
        )
        .unwrap();

        let problems = discover_problems(tmp.path(), &Config::default()).unwrap();
        assert_eq!(problems.len(), 1);
        assert_eq!(problems[0].difficulty, "Easy");
        assert_eq!(problems[0].name, "1. Two Sum");
        assert_eq!(problems[0].solutions.len(), 1);
        assert_eq!(problems[0].solutions[0].language, Language::Python);
        assert!(problems[0].test_file.is_some());
    }

    #[test]
    fn loads_cases_from_cases_or_tests_key() {
        let tmp = tempdir().unwrap();
        let file = tmp.path().join("sample.test.json");
        fs::write(
            &file,
            r#"{"mode":"stdin","tests":[{"stdin":"1\n","expected":1,"timeoutMs":10}]}"#,
        )
        .unwrap();

        let suite = TestSuite::load(&file).unwrap();
        assert!(matches!(suite.mode, TestMode::Stdin));
        assert_eq!(suite.cases.len(), 1);
        assert_eq!(suite.cases[0].timeout_ms, Some(10));
    }

    #[test]
    fn loads_single_or_multiple_function_names() {
        let tmp = tempdir().unwrap();
        let single = tmp.path().join("single.test.json");
        fs::write(
            &single,
            r#"{"mode":"args","function":"twoSum","cases":[{"args":[],"expected":null}]}"#,
        )
        .unwrap();
        let multiple = tmp.path().join("multiple.test.json");
        fs::write(
            &multiple,
            r#"{"mode":"args","function":["twoSum","two_sum"],"cases":[{"args":[],"expected":null}]}"#,
        )
        .unwrap();

        assert_eq!(TestSuite::load(&single).unwrap().function, vec!["twoSum"]);
        assert_eq!(
            TestSuite::load(&multiple).unwrap().function,
            vec!["twoSum", "two_sum"]
        );
    }

    #[test]
    fn parses_json_output_strictly() {
        assert_eq!(
            parse_output_as_json("[0,1]\n").unwrap(),
            serde_json::json!([0, 1])
        );
        assert!(parse_output_as_json("not json").is_err());
    }

    #[test]
    fn stdin_value_accepts_strings_and_json_values() {
        assert_eq!(
            value_to_stdin(Some(&serde_json::json!("hello"))).unwrap(),
            "hello"
        );
        assert_eq!(
            value_to_stdin(Some(&serde_json::json!([1, 2]))).unwrap(),
            "[1,2]"
        );
    }

    #[test]
    fn converts_json_args_to_rust_literals() {
        assert_eq!(
            json_to_rust_literal(&serde_json::json!([2, 7, 11, 15])).unwrap(),
            "vec![2, 7, 11, 15]"
        );
        assert_eq!(
            json_to_rust_literal(&serde_json::json!("abc")).unwrap(),
            "\"abc\".to_string()"
        );
        assert!(json_to_rust_literal(&serde_json::json!({"x": 1})).is_err());
    }
}
