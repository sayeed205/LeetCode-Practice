from collections import Counter
from typing import List


class Solution:
    def numTriplets(self, nums1: List[int], nums2: List[int]) -> int:
        def count_triplets(nums1, nums2):
            product_counts = Counter()
            count = 0

            for i in range(len(nums1)):
                for j in range(i + 1, len(nums1)):
                    product = nums1[i] * nums1[j]
                    product_counts[product] += 1

            for num in nums2:
                target = num * num
                count += product_counts[target]

            return count

        return count_triplets(nums1, nums2) + count_triplets(nums2, nums1)
