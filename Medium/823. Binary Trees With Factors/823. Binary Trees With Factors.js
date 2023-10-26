/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
    const MOD = 1000000007;
    const n = arr.length;
    arr.sort((a, b) => a - b);

    const dp = new Array(n).fill(1);
    const index = new Map();

    for (let i = 0; i < n; i++) {
        index.set(arr[i], i);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] % arr[j] === 0) {
                const factor = arr[i] / arr[j];
                if (index.has(factor)) {
                    const k = index.get(factor);
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
};
