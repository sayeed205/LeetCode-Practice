/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;

    if (len1 + len2 !== len3) {
        return false;
    }

    const dp = new Array(len1 + 1)
        .fill(false)
        .map(() => new Array(len2 + 1).fill(false));
    dp[0][0] = true;

    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            if (i > 0) {
                dp[i][j] ||=
                    dp[i - 1][j] && s1.charAt(i - 1) === s3.charAt(i + j - 1);
            }
            if (j > 0) {
                dp[i][j] ||=
                    dp[i][j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1);
            }
        }
    }

    return dp[len1][len2];
};
