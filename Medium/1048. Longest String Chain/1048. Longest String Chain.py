class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        # Sort the words by their length in ascending order.
        words.sort(key=lambda x: len(x))

        # Create a dictionary to store the length of the longest chain for each word.
        dp = {}
        max_chain_length = 1

        for word in words:
            dp[word] = 1

            # Generate all possible predecessors of the current word by removing one character.
            for i in range(len(word)):
                predecessor = word[:i] + word[i + 1 :]

                # Check if the predecessor exists in the dictionary and update the chain length.
                if predecessor in dp:
                    dp[word] = max(dp[word], dp[predecessor] + 1)

            # Update the maximum chain length for the current word.
            max_chain_length = max(max_chain_length, dp[word])

        return max_chain_length
