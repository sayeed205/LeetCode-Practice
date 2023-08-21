class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        n = len(s)

        for length in range(1, n // 2 + 1):
            if n % length == 0:
                repeat_count = n // length
                pattern = s[:length]
                constructed = pattern * repeat_count
                if constructed == s:
                    return True

        return False
