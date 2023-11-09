class Solution:
    def countHomogenous(self, s: str) -> int:
        MOD = 10**9 + 7
        count = 0
        result = 0

        for i in range(len(s)):
            if i == 0 or s[i] == s[i - 1]:
                count += 1
            else:
                count = 1

            result = (result + count) % MOD

        return result
