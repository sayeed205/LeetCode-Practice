/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    if (n === 1) {
        return 0;
    }

    // Calculate the midpoint of the previous row
    const mid = Math.pow(2, n - 2);

    // If k is less than or equal to mid, it's the same as in the previous row.
    if (k <= mid) {
        return kthGrammar(n - 1, k);
    } else {
        // If k is greater than mid, it's the opposite of the symbol in the previous row.
        return 1 - kthGrammar(n - 1, k - mid);
    }
};
