from collections import Counter


class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        s_count = Counter(s)
        t_count = Counter(t)

        # Calculate the difference between the counts
        char_diff = t_count - s_count

        # The added character(s) will be in char_diff, return the first one
        return list(char_diff.keys())[0]
