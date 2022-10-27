class Solution:
    def isValid(self, s: str) -> bool:  # type: ignore
        # obj = {"(": ")", "{": "}", "[": "]"}
        # values = []
        # for i in s:
        #     if i in obj:
        #         values.append(i)
        #     elif len(values) == 0 or obj[values.pop()] != i:
        #         return False

        # return len(values) == 0

        # <================== alt ans ==================>
        while len(s) > 0:
            L = len(s)
            s = s.replace("()", "").replace("{}", "").replace("[]", "")
            if len(s) == L:
                return False
        return True


x = Solution()
print(x.isValid("]"))
