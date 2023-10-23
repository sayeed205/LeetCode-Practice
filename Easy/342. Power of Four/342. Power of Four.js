/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n <= 0) {
        return false;
    }

    // Check if n is a power of 2
    if ((n & (n - 1)) === 0) {
        // Check if the logarithm of n to the base 4 is an integer
        const logResult = Math.log(n) / Math.log(4);
        return logResult % 1 === 0;
    } else {
        return false;
    }
};
