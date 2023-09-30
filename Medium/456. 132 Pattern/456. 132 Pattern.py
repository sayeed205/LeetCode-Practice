class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        n = len(nums)
        if n < 3:
            return False

        stack = []
        third = float("-inf")

        for i in range(n - 1, -1, -1):
            num_i = nums[i]

            if num_i < third:
                return True

            while stack and num_i > stack[-1]:
                third = stack.pop()

            if num_i > third:
                stack.append(num_i)

        return False
