class Solution:
    def minOperations(self, nums: List[int]) -> int:
        length = len(nums)
        min_operations = length
        unique_nums = set(nums)
        sorted_unique_nums = sorted(list(unique_nums))
        right = 0

        for left in range(len(sorted_unique_nums)):
            while (
                right < len(sorted_unique_nums)
                and sorted_unique_nums[right]
                < sorted_unique_nums[left] + length
            ):
                right += 1

            min_operations = min(min_operations, length - (right - left))

        return min_operations
