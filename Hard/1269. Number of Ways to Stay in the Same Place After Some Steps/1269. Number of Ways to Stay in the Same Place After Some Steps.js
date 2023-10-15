/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
    const MOD = 1000000007;

    const maxPosition = Math.min(steps, arrLen - 1);

    // Create a 2D DP array with only two rows.
    const dp = Array.from({ length: 2 }, () => Array(maxPosition + 1).fill(0));

    dp[0][0] = 1;

    for (let step = 1; step <= steps; step++) {
        const currentRow = step % 2;
        const previousRow = 1 - currentRow;

        for (let position = 0; position <= maxPosition; position++) {
            dp[currentRow][position] = 0;

            // Calculate the number of ways to reach the current position from the left.
            dp[currentRow][position] += dp[previousRow][position];

            if (position > 0) {
                dp[currentRow][position] += dp[previousRow][position - 1];
            }

            // Calculate the number of ways to reach the current position from the right.
            if (position < maxPosition) {
                dp[currentRow][position] += dp[previousRow][position + 1];
            }

            // Take the result modulo MOD.
            dp[currentRow][position] %= MOD;
        }
    }

    return dp[steps % 2][0];
};
