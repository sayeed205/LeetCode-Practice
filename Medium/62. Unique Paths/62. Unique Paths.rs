impl Solution {
    pub fn unique_paths(m: i32, n: i32) -> i32 {
        // Create a 2D array to store the number of unique paths
        let mut dp = vec![vec![0; n as usize]; m as usize];

        // Initialize the top-left cell to 1
        dp[0][0] = 1;

        // Fill the first row with 1 (only one way to go right)
        for i in 1..n as usize {
            dp[0][i] = 1;
        }

        // Fill the first column with 1 (only one way to go down)
        for i in 1..m as usize {
            dp[i][0] = 1;
        }

        // Fill the rest of the grid using dynamic programming
        for i in 1..m as usize {
            for j in 1..n as usize {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        // The value in the bottom-right cell contains the number of unique paths
        dp[(m - 1) as usize][(n - 1) as usize]
    }
}
