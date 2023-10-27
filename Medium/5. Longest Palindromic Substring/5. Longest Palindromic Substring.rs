impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let chars: Vec<char> = s.chars().collect();
        let len = chars.len();

        if len <= 1 {
            return s;
        }

        let mut dp = vec![vec![false; len]; len];
        let mut start = 0;
        let mut max_len = 1;

        // All substrings of length 1 are palindromes.
        for i in 0..len {
            dp[i][i] = true;
        }

        // Check for palindromes of length 2.
        for i in 0..len - 1 {
            if chars[i] == chars[i + 1] {
                dp[i][i + 1] = true;
                start = i;
                max_len = 2;
            }
        }

        // Check for palindromes of length greater than 2.
        for k in 3..=len {
            for i in 0..(len - k + 1) {
                let j = i + k - 1;

                if dp[i + 1][j - 1] && chars[i] == chars[j] {
                    dp[i][j] = true;

                    if k > max_len {
                        start = i;
                        max_len = k;
                    }
                }
            }
        }

        chars[start..start + max_len].iter().collect()
    }
}
