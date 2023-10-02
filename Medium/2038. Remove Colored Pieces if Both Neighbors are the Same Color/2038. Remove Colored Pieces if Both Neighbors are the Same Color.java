public class Solution {
    public boolean winnerOfGame(String colors) {
        int n = colors.length();
        if (n < 3) {
            // If there are less than 3 pieces, no one can make a move, and the game is a draw.
            return false;
        }

        int aliceMoves = 0;
        int bobMoves = 0;

        for (int i = 2; i < n; i++) {
            if (colors.charAt(i - 2) == 'A' && colors.charAt(i - 1) == 'A' && colors.charAt(i) == 'A') {
                // Alice can remove 'AAA' pattern, so she makes a move.
                aliceMoves++;
            } else if (colors.charAt(i - 2) == 'B' && colors.charAt(i - 1) == 'B' && colors.charAt(i) == 'B') {
                // Bob can remove 'BBB' pattern, so he makes a move.
                bobMoves++;
            }
        }

        // Compare the number of moves made by Alice and Bob.
        return aliceMoves > bobMoves;
    }
}
