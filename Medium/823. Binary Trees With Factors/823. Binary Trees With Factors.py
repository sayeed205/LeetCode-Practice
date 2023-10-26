class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        MOD = 10**9 + 7
        n = len(arr)
        arr.sort()

        dp = [1] * n
        index = {}

        for i in range(n):
            index[arr[i]] = i

        for i in range(n):
            for j in range(i):
                if arr[i] % arr[j] == 0:
                    factor = arr[i] // arr[j]
                    if factor in index:
                        k = index[factor]
                        dp[i] = (dp[i] + dp[j] * dp[k]) % MOD

        result = 0
        for count in dp:
            result = (result + count) % MOD

        return result
