import re


class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        # Initialize counters for Alice's and Bob's moves.
        alice_moves = 0
        bob_moves = 0

        # Find all consecutive sequences of 'A' characters with length at least 3.
        for match in re.finditer(r"A{3,}", colors):
            # Calculate the number of moves made by Alice for each match.
            # Subtract 2 because the first character doesn't count.
            alice_moves += len(match.group()) - 2

        # Find all consecutive sequences of 'B' characters with length at least 3.
        for match in re.finditer(r"B{3,}", colors):
            # Calculate the number of moves made by Bob for each match.
            # Subtract 2 because the first character doesn't count.
            bob_moves += len(match.group()) - 2

        # Compare the number of moves made by Alice and Bob.
        # Return True if Alice made more moves, indicating her win.
        # Otherwise, return False.
        return alice_moves > bob_moves
