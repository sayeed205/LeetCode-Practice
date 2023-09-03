function numTriplets(nums1: number[], nums2: number[]): number {
    function countTriplets(nums1: number[], nums2: number[]): number {
        const productCounts = new Map<number, number>();
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
}
