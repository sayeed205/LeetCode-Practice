class Solution:
    def isPalindrome(self, x: int) -> bool:  # type: ignore
        if str(x) == str(x)[::-1]:
            return True
        return False


# <======================== alt ans ========================>

# class Solution:
#     def isPalindrome(self, x: int) -> bool:  # type: ignore
#         if x < 0 : return False
#         return str(x) == str(x)[::-1]
