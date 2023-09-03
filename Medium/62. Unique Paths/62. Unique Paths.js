/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // Create a 2D array to store the number of unique paths
    var dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // Initialize the top-left cell to 1
    dp[0][0] = 1;

    // Fill the first row with 1 (only one way to go right)
    for (var i = 1; i < n; i++) {
        dp[0][i] = 1;
    }

    // Fill the first column with 1 (only one way to go down)
    for (var i = 1; i < m; i++) {
        dp[i][0] = 1;
    }

    // Fill the rest of the grid using dynamic programming
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // The value in the bottom-right cell contains the number of unique paths
    return dp[m - 1][n - 1];
};
