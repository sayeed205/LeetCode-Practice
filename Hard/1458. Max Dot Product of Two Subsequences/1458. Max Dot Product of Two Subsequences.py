class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        m = len(nums1)
        n = len(nums2)

        # Initialize two lists to store the current and previous DP values.
        # Initialize them with float('-inf') to handle negative values.
        current = [float("-inf")] * (n + 1)
        previous = [float("-inf")] * (n + 1)

        for i in range(1, m + 1):
            for j in range(1, n + 1):
                # Calculate the current dot product of elements at indices i and j.
                curr_product = nums1[i - 1] * nums2[j - 1]

                # Update the current DP value by taking the maximum of four possibilities:
                # 1. The current dot product
                # 2. The previous DP value at the same column (nums2[j])
                # 3. The current DP value at the previous column (nums1[i])
                # 4. The current dot product + the previous DP value at the diagonal (nums1[i-1], nums2[j-1])
                current[j] = max(
                    curr_product,
                    previous[j],
                    current[j - 1],
                    curr_product + max(0, previous[j - 1]),
                )

            # Swap the current and previous lists for the next iteration.
            current, previous = previous, current

        # The result will be in the last column of the previous list.
        return previous[n]
