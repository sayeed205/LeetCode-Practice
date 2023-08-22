class Solution:
    def getKth(self, lo: int, hi: int, k: int) -> int:
        def calculate_power(x):
            steps = 0
            while x != 1:
                if x % 2 == 0:
                    x //= 2
                else:
                    x = 3 * x + 1
                steps += 1
            return steps

        nums = []

        for i in range(lo, hi + 1):
            nums.append((i, calculate_power(i)))

        nums.sort(key=lambda num: (num[1], num[0]))

        return nums[k - 1][0]
