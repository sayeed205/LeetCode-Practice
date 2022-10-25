from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:  # type: ignore
        ans = {}
        for i in range(len(nums)):
            el = nums[i]
            if target - el in ans:
                return [ans[target - el], i]
            ans[el] = i
        return []


""" <================= alt ans =================> """
"""
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:  # type: ignore
        ans = {}
        for i, el in enumerate(nums):
            remain = target - value

            if remain in ans:
                return [ans[remain], i]
            ans[el] = i
        return []
"""
