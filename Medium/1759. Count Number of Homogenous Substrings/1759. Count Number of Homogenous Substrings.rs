const MOD: i32 = 1_000_000_007;

impl Solution {
    pub fn count_homogenous(s: String) -> i32 {
        s.chars()
            .chain(std::iter::once('\0')) // '\0' as a generic placeholder
            .fold((0, 0, '\0'), |(ret, cnt, prev), c| match c == prev {
                true => ((ret + cnt) % MOD, cnt + 1, c),
                false => ((ret + cnt) % MOD, 1, c),
            })
            .0 as _
    }
}
