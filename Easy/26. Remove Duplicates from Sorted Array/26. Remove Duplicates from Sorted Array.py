class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        k = 1  # Initialize the count of unique elements

        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[k] = nums[
                    i
                ]  # Move the unique element to the next position
                k += 1  # Increment the count of unique elements

        return k
