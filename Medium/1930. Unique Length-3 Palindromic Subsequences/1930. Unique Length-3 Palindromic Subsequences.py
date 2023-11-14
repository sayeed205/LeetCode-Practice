class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        def count_unique_between(start, end, used):
            count = 0
            for j in range(start, end):
                idx = ord(s[j]) - ord('a')
                if not used[idx]:
                    used[idx] = True
                    count += 1
            for idx in range(26):
                used[idx] = False  # Resetting the values to False
            return count

        s_bytes = [ord(char) - ord('a') for char in s]
        left = [float('inf')] * 26
        right = [0] * 26
        ret = 0

        for i, char in enumerate(s_bytes):
            left[char] = min(left[char], i)
            right[char] = i

        used = [False] * 26
        for i in range(26):
            if left[i] != float('inf'):  # Check if left[i] is a valid index
                ret += count_unique_between(left[i] + 1, right[i], used)

        return ret
