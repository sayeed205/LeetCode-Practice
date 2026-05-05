use anyhow::{Context, Result, bail};
use dialoguer::{FuzzySelect, Select, theme::ColorfulTheme};
use leetcode_practice_runner::{
    Config, Language, Problem, SolutionFile, TestSuite, discover_problems, format_report,
    run_solution,
};
use std::collections::BTreeSet;
use std::path::Path;

fn main() {
    if let Err(error) = run() {
        eprintln!("error: {error:#}");
        std::process::exit(1);
    }
}

fn run() -> Result<()> {
    let root = std::env::current_dir().context("failed to detect current directory")?;
    let config = Config::load(&root)?;
    let problems = discover_problems(&root, &config)?;

    if problems.is_empty() {
        bail!("no supported problems detected under {}", root.display());
    }

    let difficulty = choose_difficulty(&problems)?;
    let difficulty_problems = problems
        .iter()
        .filter(|problem| problem.difficulty == difficulty)
        .collect::<Vec<_>>();
    let problem = choose_problem(&difficulty_problems)?;
    let solution = choose_language(problem)?;

    let test_file = problem.test_file.as_ref().ok_or_else(|| {
        anyhow::anyhow!(
            "no .test.json file found for {} ({})",
            problem.name,
            problem.path.display()
        )
    })?;
    let suite = TestSuite::load(test_file)?;

    println!(
        "Running {} / {} / {}",
        problem.difficulty,
        problem.name,
        solution.language.label()
    );
    println!("Solution: {}", relative(&root, &solution.path));
    println!("Tests:    {}", relative(&root, test_file));

    let report = run_solution(&root, &config, solution, &suite)?;
    println!("{}", format_report(&report));

    if report.passed() != report.cases.len() {
        std::process::exit(1);
    }

    Ok(())
}

fn choose_difficulty(problems: &[Problem]) -> Result<String> {
    let difficulties = problems
        .iter()
        .map(|problem| problem.difficulty.clone())
        .collect::<BTreeSet<_>>()
        .into_iter()
        .collect::<Vec<_>>();
    let idx = choose("Choose difficulty", &difficulties)?;
    Ok(difficulties[idx].clone())
}

fn choose_problem<'a>(problems: &[&'a Problem]) -> Result<&'a Problem> {
    let labels = problems
        .iter()
        .map(|problem| {
            let test_status = if problem.test_file.is_some() {
                "tests"
            } else {
                "missing .test.json"
            };
            format!(
                "{} ({}, {} langs)",
                problem.name,
                test_status,
                problem.solutions.len()
            )
        })
        .collect::<Vec<_>>();
    let idx = choose("Choose problem", &labels)?;
    Ok(problems[idx])
}

fn choose_language(problem: &Problem) -> Result<&SolutionFile> {
    let labels = problem
        .solutions
        .iter()
        .map(|solution| {
            format!(
                "{} - {}",
                solution.language.label(),
                solution.path.display()
            )
        })
        .collect::<Vec<_>>();
    let idx = choose("Choose language", &labels)?;
    Ok(&problem.solutions[idx])
}

fn choose(prompt: &str, items: &[String]) -> Result<usize> {
    if items.is_empty() {
        bail!("nothing to choose for {prompt}");
    }

    let theme = ColorfulTheme::default();
    match FuzzySelect::with_theme(&theme)
        .with_prompt(prompt)
        .items(items)
        .default(0)
        .interact_opt()
    {
        Ok(Some(index)) => Ok(index),
        Ok(None) => bail!("selection cancelled"),
        Err(_) => Select::with_theme(&theme)
            .with_prompt(format!("{prompt} (fallback numbered prompt)"))
            .items(items)
            .default(0)
            .interact_opt()?
            .ok_or_else(|| anyhow::anyhow!("selection cancelled")),
    }
}

fn relative(root: &Path, path: &Path) -> String {
    path.strip_prefix(root)
        .unwrap_or(path)
        .display()
        .to_string()
}

#[allow(dead_code)]
fn _language_key(language: Language) -> &'static str {
    language.key()
}
