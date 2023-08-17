/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false; // Negative numbers or multiples of 10 can't be palindromes
    }

    let reversed = 0;
    let num = x;

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return x === reversed;
};
