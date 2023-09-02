use std::collections::HashSet;

impl Solution {
    pub fn min_extra_char(s: String, dictionary: Vec<String>) -> i32 {
        // Initialize the maximum value and convert the dictionary into a HashSet for quick lookups.
        let max_val = s.len() as i32 + 1;
        let dictionary_set: HashSet<_> = dictionary.into_iter().collect();

        // Initialize the dp vector with max values, except dp[0] which is 0.
        let mut dp = vec![max_val; s.len() + 1];
        dp[0] = 0;

        // Convert the input string into characters for easier slicing.
        let s_chars: Vec<char> = s.chars().collect();

        for i in 1..=s.len() {
            // Initialize dp[i] with the previous value + 1.
            dp[i] = dp[i - 1] + 1;

            // Check substrings from 1 to i.
            for l in 1..=i {
                // Create a substring from s_chars.
                let substring: String = s_chars[i - l..i].iter().collect();

                // If the substring is in the dictionary, update dp[i].
                if dictionary_set.contains(&substring) {
                    dp[i] = std::cmp::min(dp[i], dp[i - l]);
                }
            }
        }

        // Return the minimum extra characters for the whole string.
        dp[s.len()] as i32
    }
}
