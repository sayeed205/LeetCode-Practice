function countOrders(n: number): number {
    const MOD = 1000000007;
    const dp: number[] = new Array(n + 1).fill(0);
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] * (2 * i - 1) * i) % MOD;
    }

    return dp[n];
}
