class Solution {
    public int countOrders(int n) {
        long MOD = 1000000007;
        long[] dp = new long[n + 1];
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] * (2 * i - 1) * i;
            dp[i] %= MOD;
        }

        return (int) dp[n];
    }
}
