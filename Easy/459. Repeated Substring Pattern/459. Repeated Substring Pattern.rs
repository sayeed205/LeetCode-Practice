impl Solution {
    pub fn repeated_substring_pattern(s: String) -> bool {
        let n = s.len();

        for len in 1..=n / 2 {
            if n % len == 0 {
                let repeat_count = n / len;
                let pattern = &s[0..len];
                let constructed = pattern.repeat(repeat_count);
                if constructed == s {
                    return true;
                }
            }
        }

        false
    }
}
