class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        def rev(num: int) -> int:
            result = 0
            while num > 0:
                result = result * 10 + num % 10
                num //= 10
            return result

        MOD = 10**9 + 7
        dist = {}

        for num in nums:
            offset = num - rev(num)
            dist[offset] = dist.get(offset, 0) + 1

        nice_pairs = 0

        for count in dist.values():
            if count > 1:
                nice_pairs = (nice_pairs + (count * (count - 1) // 2) % MOD) % MOD

        return nice_pairs
