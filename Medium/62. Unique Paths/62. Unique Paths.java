class Solution {
    public int uniquePaths(int m, int n) {
        // Create a 2D array to store the number of unique paths
        int[][] dp = new int[m][n];
        
        // Initialize the top-left cell to 1
        dp[0][0] = 1;
        
        // Fill the first row with 1 (only one way to go right)
        for (int i = 1; i < n; i++) {
            dp[0][i] = 1;
        }
        
        // Fill the first column with 1 (only one way to go down)
        for (int i = 1; i < m; i++) {
            dp[i][0] = 1;
        }
        
        // Fill the rest of the grid using dynamic programming
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        
        // The value in the bottom-right cell contains the number of unique paths
        return dp[m - 1][n - 1];
    }
}
