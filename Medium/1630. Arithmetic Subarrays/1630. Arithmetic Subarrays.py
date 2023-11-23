from typing import List

class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        def is_arithmetic(subarray):
            sorted_subarray = sorted(subarray)
            diff = sorted_subarray[1] - sorted_subarray[0]
            return all(sorted_subarray[i + 1] - sorted_subarray[i] == diff for i in range(len(sorted_subarray) - 1))

        return [is_arithmetic(nums[start:end + 1]) for start, end in zip(l, r)]
