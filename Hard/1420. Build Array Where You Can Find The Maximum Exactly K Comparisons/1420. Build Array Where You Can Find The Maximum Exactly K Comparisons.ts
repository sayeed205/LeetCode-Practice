function numOfArrays(n: number, m: number, k: number): number {
    const MOD = 10 ** 9 + 7;
    const dp: number[][][] = new Array(n + 1)
        .fill(0)
        .map(() =>
            new Array(m + 1).fill(0).map(() => new Array(k + 1).fill(0))
        );

    // Initialize base case: dp[1][j][1] = 1 for 1 <= j <= m
    for (let j = 1; j <= m; j++) {
        dp[1][j][1] = 1;
    }

    // Calculate dp using dynamic programming
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            for (let cost = 1; cost <= k; cost++) {
                for (let prev = 1; prev <= m; prev++) {
                    if (j > prev) {
                        dp[i][j][cost] =
                            (dp[i][j][cost] + dp[i - 1][prev][cost - 1]) % MOD;
                    } else {
                        dp[i][prev][cost] =
                            (dp[i][prev][cost] + dp[i - 1][prev][cost]) % MOD;
                    }
                }
            }
        }
    }

    // Sum up all possible arrays with k comparisons
    let result = 0;
    for (let j = 1; j <= m; j++) {
        result = (result + dp[n][j][k]) % MOD;
    }

    return result;
}
