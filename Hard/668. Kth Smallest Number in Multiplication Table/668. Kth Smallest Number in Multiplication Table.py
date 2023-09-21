class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
        left, right = 1, m * n

        while left < right:
            mid = left + (right - left) // 2

            # Count the number of elements less than or equal to mid in the multiplication table
            count = self.countElements(m, n, mid)

            if count < k:
                left = mid + 1
            else:
                right = mid

        return left

    def countElements(self, m: int, n: int, target: int) -> int:
        count = 0
        for i in range(1, m + 1):
            count += min(target // i, n)
        return count
