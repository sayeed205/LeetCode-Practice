class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        total = sum(nums)
        target = total - x
        left = 0
        n = len(nums)
        maxLength = -1
        runningSum = 0

        for right in range(n):
            runningSum += nums[right]

            while runningSum > target and left <= right:
                runningSum -= nums[left]
                left += 1

            if runningSum == target:
                maxLength = max(maxLength, right - left + 1)

        return n - maxLength if maxLength != -1 else -1
