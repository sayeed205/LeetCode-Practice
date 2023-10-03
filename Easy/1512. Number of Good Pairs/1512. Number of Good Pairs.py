class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count_array = [0] * 101  # Assuming nums[i] <= 100
        good_pairs = 0

        for num in nums:
            good_pairs += count_array[num]
            count_array[num] += 1

        return good_pairs
