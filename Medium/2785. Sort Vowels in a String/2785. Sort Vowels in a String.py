class Solution:
    def sortVowels(self, s: str) -> str:
        vowel_sorted = [char for char in s if char.lower() in "aeiou"]
        vowel_sorted.sort(reverse=True)

        result = ""
        for char in s:
            if char.lower() in "aeiou":
                result += vowel_sorted.pop()
            else:
                result += char

        return result
