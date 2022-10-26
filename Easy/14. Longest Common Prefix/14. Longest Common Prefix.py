class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:  # type: ignore
        if len(strs) == 0:
            return ""
        i = 0
        for i, el in enumerate(zip(*strs), 1):
            if len(set(el)) != 1:
                i -= 1
                break
        return strs[0][:i]


# <====================== alt ans ======================>


# class Solution:
#     def longestCommonPrefix(self, strs: list[str]) -> str:  # type: ignore
#         if len(strs) == 0:
#             return ""
#         M, m, i = max(strs), min(strs), 0
#         for i in range(min(len(M), len(m))):
#             if M[i] != m[i]:
#                 break
#             i += 1
#         return m[:i]
