class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = ""

        while columnNumber > 0:
            columnNumber -= 1  # Adjust to 0-based index
            remainder = columnNumber % 26
            digit = chr(ord("A") + remainder)
            result = digit + result
            columnNumber //= 26

        return result
