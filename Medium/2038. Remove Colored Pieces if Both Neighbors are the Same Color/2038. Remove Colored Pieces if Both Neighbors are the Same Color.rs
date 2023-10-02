impl Solution {
    pub fn winner_of_game(colors: String) -> bool {
        let n = colors.len();
        if n < 3 {
            // If there are less than 3 pieces, no one can make a move, and the game is a draw.
            return false;
        }

        let mut alice_moves = 0;
        let mut bob_moves = 0;

        // Iterate through the pieces starting from the third one (index 2).
        for i in 2..n {
            if &colors[i - 2..i + 1] == "AAA" {
                // Alice can remove 'AAA' pattern, so she makes a move.
                alice_moves += 1;
            } else if &colors[i - 2..i + 1] == "BBB" {
                // Bob can remove 'BBB' pattern, so he makes a move.
                bob_moves += 1;
            }
        }

        // Compare the number of moves made by Alice and Bob.
        alice_moves > bob_moves
    }
}
