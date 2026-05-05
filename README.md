# LeetCode Practice

Personal LeetCode solutions organized by difficulty, with a root-level interactive runner for testing solutions locally.

Profile: [Hitarashi](https://leetcode.com/hitarashi/)

## Repository layout

```text
.
├── Easy/
├── Medium/
├── Hard/
├── src/                  # Rust runner implementation
├── runner.config.json    # Runner config
├── run-leetcode.sh       # Script launcher
└── Cargo.toml            # Runner crate
```

Problem folders live under a difficulty directory:

```text
Easy/1. Two Sum/
├── 1. Two Sum.js
├── 1. Two Sum.ts
├── 1. Two Sum.py
├── 1. Two Sum.rs
├── 1. Two Sum.test.json
└── README.md
```

## Supported languages

The runner currently supports:

- JavaScript (`.js`)
- TypeScript (`.ts`)
- Python (`.py`)
- Rust (`.rs`)

Java files may exist in the repository, but JVM execution is intentionally skipped by the runner for now.

## Running solutions

Use the root script:

```bash
./run-leetcode.sh
```

Or run the Rust crate directly:

```bash
cargo run
```

The runner is interactive:

1. Choose difficulty.
2. Choose problem.
3. Choose language.
4. View per-test pass/fail results, timings, expected/actual output, and errors.

## Test files

Each problem can include a colocated `.test.json` file:

```text
<Difficulty>/<Problem>/<Problem>.test.json
```

Example:

```json
{
  "mode": "args",
  "function": ["twoSum", "two_sum"],
  "cases": [
    {
      "name": "example 1",
      "args": [[2, 7, 11, 15], 9],
      "expected": [0, 1],
      "timeoutMs": 1000
    }
  ]
}
```

### `args` mode

`args` mode calls a solution function directly through a generated wrapper.

- JS/TS commonly use camelCase names like `twoSum`.
- Python/Rust commonly use snake_case names like `two_sum`.
- Use an array for `function` when names differ by language:

```json
"function": ["twoSum", "two_sum"]
```

The runner tries each name until one works.

### `stdin` mode

`stdin` mode passes test input to the program through standard input and expects JSON on stdout.

```json
{
  "mode": "stdin",
  "cases": [
    {
      "name": "sample",
      "stdin": "1 2\n",
      "expected": 3
    }
  ]
}
```

## Output comparison

Program output is parsed as JSON and compared with strict JSON equality.

For example, these are different:

- `[0, 1]`
- `[1, 0]`

Each case can override timeout with `timeoutMs`; otherwise the default from `runner.config.json` is used.

## Runner configuration

`runner.config.json` controls:

- default timeout
- ignored directories
- temporary wrapper cleanup
- language runner command fallbacks

Generated wrappers are written under:

```text
.runner/tmp/
```

They are removed automatically when `cleanupTmp` is enabled.

## Runner development

The runner itself is a Rust 2024 crate.

Run its tests with:

```bash
cargo test
```

Format Rust code with:

```bash
cargo fmt
```
