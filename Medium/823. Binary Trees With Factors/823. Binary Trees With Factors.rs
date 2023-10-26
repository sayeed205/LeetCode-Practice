impl Solution {
    pub fn num_factored_binary_trees(arr: Vec<i32>) -> i32 {
        const MOD: i64 = 1_000_000_007;
        let mut arr = arr;
        let mut dp = vec![1; arr.len()];

        arr.sort();
        let mut index = std::collections::HashMap::new();
        for (i, &num) in arr.iter().enumerate() {
            index.insert(num, i);
        }

        for i in 0..arr.len() {
            for j in 0..i {
                if arr[i] % arr[j] == 0 {
                    let factor = arr[i] / arr[j];
                    if let Some(&k) = index.get(&factor) {
                        dp[i] = (dp[i] + dp[j] * dp[k]) % MOD;
                    }
                }
            }
        }

        dp.iter().fold(0, |acc, &count| (acc + count) % MOD) as i32
    }
}
