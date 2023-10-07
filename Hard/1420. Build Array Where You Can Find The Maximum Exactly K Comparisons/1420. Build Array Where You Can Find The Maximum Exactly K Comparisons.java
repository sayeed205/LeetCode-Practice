class Solution {
    public int numOfArrays(int n, int m, int k) {
        int MOD = 1000000007;
        int[][][] dp = new int[n + 1][m + 1][k + 1];

        // Initialize base case: dp[1][j][1] = 1 for 1 <= j <= m
        for (int j = 1; j <= m; j++) {
            dp[1][j][1] = 1;
        }

        // Calculate dp using dynamic programming
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                for (int cost = 1; cost <= k; cost++) {
                    for (int prev = 1; prev <= m; prev++) {
                        if (j > prev) {
                            dp[i][j][cost] = (dp[i][j][cost] + dp[i - 1][prev][cost - 1]) % MOD;
                        } else {
                            dp[i][prev][cost] = (dp[i][prev][cost] + dp[i - 1][prev][cost]) % MOD;
                        }
                    }
                }
            }
        }

        // Sum up all possible arrays with k comparisons
        int result = 0;
        for (int j = 1; j <= m; j++) {
            result = (result + dp[n][j][k]) % MOD;
        }

        return result;
    }

    
}
