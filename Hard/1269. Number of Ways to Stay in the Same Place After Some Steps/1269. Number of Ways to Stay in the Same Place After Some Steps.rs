impl Solution {
    pub fn num_ways(steps: i32, arr_len: i32) -> i32 {
        const MOD: i64 = 10i64.pow(9) + 7;

        let len = steps.min(arr_len) as i64;
        let mut dp = vec![0; len as _];
        dp[0] = 1;

        (1..=steps as i64).fold(dp, |dp, rem| {
            (0..len)
                .map(|cur| {
                    (-1..=1)
                        .map(|i| i + cur)
                        .filter(|&i| i >= 0 && i < len)
                        .map(|i| dp[i as usize])
                        .sum::<i64>()
                        % MOD
                })
                .collect()
        })[0] as _
    }
}
