class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        i, j = len(s) - 1, len(t) - 1

        while i >= 0 or j >= 0:
            backspace_count_s = 0
            while i >= 0 and (s[i] == "#" or backspace_count_s > 0):
                if s[i] == "#":
                    backspace_count_s += 1
                else:
                    backspace_count_s -= 1
                i -= 1

            backspace_count_t = 0
            while j >= 0 and (t[j] == "#" or backspace_count_t > 0):
                if t[j] == "#":
                    backspace_count_t += 1
                else:
                    backspace_count_t -= 1
                j -= 1

            if i < 0 or j < 0:
                return i < 0 and j < 0  # Both strings are empty.

            if s[i] != t[j]:
                return False

            i -= 1
            j -= 1

        return True
