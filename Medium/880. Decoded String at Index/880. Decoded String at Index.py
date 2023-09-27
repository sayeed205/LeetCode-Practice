class Solution:
    def decodeAtIndex(self, s: str, k: int) -> str:
        size = 0
        l = len(s)

        # Calculate the total size of the decoded string
        for i in range(l):
            if s[i] >= "a" and s[i] <= "z":
                size += 1
            else:
                size *= ord(s[i]) - 48

        # Traverse the string in reverse
        for i in range(l - 1, -1, -1):
            k %= size

            # If k becomes zero and the current character is a letter, return it
            if k == 0 and s[i] >= "a" and s[i] <= "z":
                return s[i]

            # Update size based on the current character
            if s[i] >= "0" and s[i] <= "9":
                size //= ord(s[i]) - 48
            else:
                size -= 1
