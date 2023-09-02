/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    const maxVal = s.length + 1;
    const dictionarySet = new Set(dictionary);

    const dp = new Array(s.length + 1).fill(maxVal);
    dp[0] = 0;

    for (let i = 1; i <= s.length; i++) {
        dp[i] = dp[i - 1] + 1;

        for (let l = 1; l <= i; l++) {
            const substring = s.slice(i - l, i);

            if (dictionarySet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[i - l]);
            }
        }
    }

    return dp[s.length];
};
