from typing import List


class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        increasing = decreasing = False

        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                increasing = True
            elif nums[i] < nums[i - 1]:
                decreasing = True

            if increasing and decreasing:
                # If we find both increasing and decreasing elements, the list is not monotonic.
                return False

        return True
