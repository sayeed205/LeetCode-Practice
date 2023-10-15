class Solution {
    public int numWays(int steps, int arrLen) {
        final int MOD = 1000000007;
        
        int maxPosition = Math.min(steps, arrLen - 1);
        
        // Create a 2D DP array with only two rows.
        int[][] dp = new int[2][maxPosition + 1];
        
        dp[0][0] = 1;
        
        for (int step = 1; step <= steps; step++) {
            int currentRow = step % 2;
            int previousRow = 1 - currentRow;

            for (int position = 0; position <= maxPosition; position++) {
                dp[currentRow][position] = 0;

                // Calculate the number of ways to reach the current position from the left.
                dp[currentRow][position] = (dp[currentRow][position] + dp[previousRow][position]) % MOD;

                if (position > 0) {
                    dp[currentRow][position] = (dp[currentRow][position] + dp[previousRow][position - 1]) % MOD;
                }

                // Calculate the number of ways to reach the current position from the right.
                if (position < maxPosition) {
                    dp[currentRow][position] = (dp[currentRow][position] + dp[previousRow][position + 1]) % MOD;
                }
            }
        }
        
        return dp[steps % 2][0];
    }
}
