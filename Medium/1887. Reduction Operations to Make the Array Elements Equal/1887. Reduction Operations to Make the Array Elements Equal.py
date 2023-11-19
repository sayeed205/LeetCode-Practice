from typing import List

class Solution:
    def reductionOperations(self, nums: List[int]) -> int:
        nums.sort(reverse=True)  # Sort in descending order

        operations = 0
        next_largest = nums[0]

        for i in range(1, len(nums)):
            if nums[i] < next_largest:
                next_largest = nums[i]
                operations += i

        return operations
