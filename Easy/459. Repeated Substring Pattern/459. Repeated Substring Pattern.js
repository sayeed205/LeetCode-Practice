/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const n = s.length;

    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const repeatCount = n / len;
            const pattern = s.substring(0, len);
            const constructed = pattern.repeat(repeatCount);
            if (constructed === s) {
                return true;
            }
        }
    }

    return false;
};
