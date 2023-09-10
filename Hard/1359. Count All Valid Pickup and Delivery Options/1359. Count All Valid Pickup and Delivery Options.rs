const MOD: i64 = 1_000_000_007;

impl Solution {
    pub fn count_orders(n: i32) -> i32 {
        let n = n as usize;
        let mut dp = vec![0i64; n + 1];
        dp[1] = 1;

        for i in 2..=n {
            dp[i] = dp[i - 1] * (2 * i - 1) as i64 * i as i64;
            dp[i] %= MOD;
        }

        dp[n] as i32
    }
}
