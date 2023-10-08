/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    // Initialize two arrays to store the current and previous DP values.
    // Initialize them with Number.MIN_SAFE_INTEGER to handle negative values.
    let current = new Array(n + 1).fill(Number.MIN_SAFE_INTEGER);
    let previous = new Array(n + 1).fill(Number.MIN_SAFE_INTEGER);

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Calculate the current dot product of elements at indices i and j.
            const currProduct = nums1[i - 1] * nums2[j - 1];

            // Update the current DP value by taking the maximum of four possibilities:
            // 1. The current dot product
            // 2. The previous DP value at the same column (nums2[j])
            // 3. The current DP value at the previous column (nums1[i])
            // 4. The current dot product + the previous DP value at the diagonal (nums1[i-1], nums2[j-1])
            current[j] = Math.max(
                currProduct,
                previous[j],
                current[j - 1],
                currProduct + Math.max(0, previous[j - 1])
            );
        }

        // Swap the current and previous arrays for the next iteration.
        [current, previous] = [previous, current];
    }

    // The result will be in the last column of the previous array.
    return previous[n];
};
