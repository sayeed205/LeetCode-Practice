/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    const n = stones.length;
    const dp = new Array(n).fill(0).map(() => new Array(n + 1).fill(false));
    dp[0][1] = true;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const jump = stones[i] - stones[j];

            if (jump <= j + 1) {
                dp[i][jump] = dp[j][jump - 1] || dp[j][jump] || dp[j][jump + 1];
                if (i === n - 1 && dp[i][jump]) {
                    return true; // If we can reach the last stone with any jump size, return true.
                }
            }
        }
    }
    return false; // If the last stone is not reachable, return false.
};
