const MOD = 1000000007;

/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
    let count = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        result = (result + count) % MOD;
    }

    return result;
};
