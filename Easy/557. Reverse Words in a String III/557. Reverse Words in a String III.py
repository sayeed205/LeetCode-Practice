class Solution:
    def reverseWords(self, s: str) -> str:
        # Split the input string into words using whitespace as a delimiter
        words = s.split()

        # Create a list to store the reversed words
        reversed_words = []

        # Iterate through the words and reverse each word
        for word in words:
            # Reverse the characters of the word and append it to reversed_words
            reversed_word = word[::-1]
            reversed_words.append(reversed_word)

        # Join the reversed words with whitespace to form the final sentence
        result = " ".join(reversed_words)

        return result
