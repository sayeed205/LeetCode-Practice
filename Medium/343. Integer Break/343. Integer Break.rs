impl Solution {
    pub fn integer_break(n: i32) -> i32 {
        if n <= 3 {
            return n - 1;
        }

        let mut dp = vec![0; n as usize + 1];
        dp[2] = 2;
        dp[3] = 3;

        for i in 4..=n {
            for j in 1..=i / 2 {
                dp[i as usize] =
                    std::cmp::max(dp[i as usize], dp[j as usize] * dp[(i - j) as usize]);
            }
        }

        dp[n as usize]
    }
}
