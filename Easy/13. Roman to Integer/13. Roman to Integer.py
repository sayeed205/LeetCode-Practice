# class Solution:
#     def romanToInt(self, s: str) -> int:  # type: ignore
#         symbols = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
#         result = 0
#         for i, char in enumerate(s):
#             if i < len(s) - 1:
#                 if symbols[char] < symbols[s[i + 1]]:
#                     result -= symbols[char]
#                 else:
#                     result += symbols[char]
#             else:
#                 result += symbols[char]

#         return result


# <================ alt ans ================>
class Solution:
    def romanToInt(self, s: str) -> int:  # type: ignore
        symbols = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        result = 0
        prev = 0
        for char in s[::-1]:  # reverse the String
            if symbols[char] >= prev:
                result += symbols[char]  # "II" = 1 + 1
            else:
                result -= symbols[char]  # "IV" = 5 - 1
            prev = symbols[char]

        print(result)
        return result


x = Solution()
x.romanToInt("MCMXCIV")
