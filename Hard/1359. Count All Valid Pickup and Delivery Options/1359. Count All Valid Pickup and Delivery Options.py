class Solution:
    def countOrders(self, n: int) -> int:
        MOD = 10**9 + 7
        dp = [0] * (n + 1)
        dp[1] = 1

        for i in range(2, n + 1):
            dp[i] = dp[i - 1] * (2 * i - 1) * i % MOD

        return dp[n]
