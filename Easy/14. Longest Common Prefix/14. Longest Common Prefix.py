class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ""
        M, m, i = max(strs), min(strs), 0
        for i in range(min(len(M), len(m))):
            if M[i] != m[i]:
                break
            i += 1
        return m[:i]
