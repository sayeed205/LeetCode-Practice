from typing import List

class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()  # Sort the array

        max_freq = 0
        left = 0
        sum_val = 0

        for right in range(len(nums)):
            sum_val += nums[right]

            # Check if we need to shrink the window
            while (right - left + 1) * nums[right] - sum_val > k:
                sum_val -= nums[left]
                left += 1

            # Update the maximum frequency
            max_freq = max(max_freq, right - left + 1)

        return max_freq
