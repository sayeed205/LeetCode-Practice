class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        MOD = 10**9 + 7

        maxPosition = min(steps, arrLen - 1)

        # Create a 2D DP array with only two rows.
        dp = [[0 for _ in range(maxPosition + 1)] for _ in range(2)]

        dp[0][0] = 1

        for step in range(1, steps + 1):
            currentRow = step % 2
            previousRow = 1 - currentRow

            for position in range(maxPosition + 1):
                dp[currentRow][position] = 0

                # Calculate the number of ways to reach the current position from the left.
                dp[currentRow][position] += dp[previousRow][position]

                if position > 0:
                    dp[currentRow][position] += dp[previousRow][position - 1]

                # Calculate the number of ways to reach the current position from the right.
                if position < maxPosition:
                    dp[currentRow][position] += dp[previousRow][position + 1]

                # Take the result modulo MOD.
                dp[currentRow][position] %= MOD

        return dp[steps % 2][0]
