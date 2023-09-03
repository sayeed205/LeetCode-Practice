class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # Create a 2D array to store the number of unique paths
        dp = [[0] * n for _ in range(m)]

        # Initialize the top-left cell to 1
        dp[0][0] = 1

        # Fill the first row with 1 (only one way to go right)
        for i in range(1, n):
            dp[0][i] = 1

        # Fill the first column with 1 (only one way to go down)
        for i in range(1, m):
            dp[i][0] = 1

        # Fill the rest of the grid using dynamic programming
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

        # The value in the bottom-right cell contains the number of unique paths
        return dp[m - 1][n - 1]
