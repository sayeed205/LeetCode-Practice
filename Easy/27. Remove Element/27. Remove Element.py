class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0  # Initialize the count of non-val elements

        # Iterate through the list
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]  # Move the non-val element to the front
                k += 1  # Increment the count of non-val elements

        return k  # Return the count of non-val elements
