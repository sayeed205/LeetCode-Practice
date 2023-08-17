class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        bracket_map = {")": "(", "]": "[", "}": "{"}

        for c in s:
            if c in "([{":
                stack.append(c)
            elif c in ")]}":
                if not stack or stack[-1] != bracket_map[c]:
                    return False
                stack.pop()

        return not stack
