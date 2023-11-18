from typing import List

class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()

        max_pair_sum = 0
        n = len(nums)

        for i in range(n // 2):
            max_pair_sum = max(max_pair_sum, nums[i] + nums[n - i - 1])

        return max_pair_sum
