/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
    function countTriplets(nums1, nums2) {
        const productCounts = new Map();
        let count = 0;

        for (let i = 0; i < nums1.length; i++) {
            for (let j = i + 1; j < nums1.length; j++) {
                const product = nums1[i] * nums1[j];
                productCounts.set(
                    product,
                    (productCounts.get(product) || 0) + 1
                );
            }
        }

        for (const num of nums2) {
            const target = num * num;
            count += productCounts.get(target) || 0;
        }

        return count;
    }

    return countTriplets(nums1, nums2) + countTriplets(nums2, nums1);
};
