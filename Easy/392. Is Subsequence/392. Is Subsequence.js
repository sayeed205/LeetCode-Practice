/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sPtr = 0;
    let tPtr = 0;

    while (sPtr < s.length && tPtr < t.length) {
        if (s[sPtr] === t[tPtr]) {
            sPtr++;
        }
        tPtr++;
    }

    return sPtr === s.length;
};
