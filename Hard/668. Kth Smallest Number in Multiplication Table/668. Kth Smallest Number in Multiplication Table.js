/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
    let left = 1;
    let right = m * n;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        // Count the number of elements less than or equal to mid in the multiplication table
        const count = countElements(m, n, mid);

        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

function countElements(m, n, target) {
    let count = 0;
    for (let i = 1; i <= m; i++) {
        count += Math.min(Math.floor(target / i), n);
    }
    return count;
}
