from typing import List


class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        max_val = len(s) + 1
        dictionary_set = set(dictionary)

        dp = [max_val] * (len(s) + 1)
        dp[0] = 0

        for i in range(1, len(s) + 1):
            dp[i] = dp[i - 1] + 1

            for l in range(1, i + 1):
                substring = s[i - l : i]

                if substring in dictionary_set:
                    dp[i] = min(dp[i], dp[i - l])

        return dp[len(s)]
