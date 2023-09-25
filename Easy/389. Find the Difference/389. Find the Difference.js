/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let result = 0;

    // XOR all characters in both strings
    for (const char of s) {
        result ^= char.charCodeAt(0);
    }

    for (const char of t) {
        result ^= char.charCodeAt(0);
    }

    // The result will be the ASCII code of the added character
    return String.fromCharCode(result);
};
