class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        stack = []
        last_occurrence = {char: i for i, char in enumerate(s)}
        seen = set()

        for i, char in enumerate(s):
            if char not in seen:
                while (
                    stack
                    and char < stack[-1]
                    and i < last_occurrence[stack[-1]]
                ):
                    seen.remove(stack.pop())
                seen.add(char)
                stack.append(char)

        return "".join(stack)
