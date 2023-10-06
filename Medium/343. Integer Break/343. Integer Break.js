/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if (n <= 3) {
        return n - 1;
    }

    let result = 1;

    while (n > 4) {
        result *= 3;
        n -= 3;
    }

    return result * n;
};
