function numFactoredBinaryTrees(arr: number[]): number {
    const MOD = 10 ** 9 + 7;
    const n = arr.length;
    arr.sort((a, b) => a - b);

    const dp: number[] = new Array(n).fill(1);
    const index: { [key: number]: number } = {};

    for (let i = 0; i < n; i++) {
        index[arr[i]] = i;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] % arr[j] === 0) {
                const factor = arr[i] / arr[j];
                if (index[factor] !== undefined) {
                    const k = index[factor];
                    dp[i] = (dp[i] + dp[j] * dp[k]) % MOD;
                }
            }
        }
    }

    let result = 0;
    for (const count of dp) {
        result = (result + count) % MOD;
    }

    return result;
}
