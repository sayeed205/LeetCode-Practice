/**
 * @param {string} colors
 * @return {boolean}
 */
function winnerOfGame(colors) {
    let aliceMoves = 0;
    let bobMoves = 0;

    // Find all consecutive sequences of 'A' characters with length at least 3.
    const regexA = /A{3,}/g;
    const matchesA = colors.match(regexA);
    if (matchesA) {
        for (const match of matchesA) {
            // Calculate the number of moves made by Alice for each match.
            // Subtract 2 because the first character doesn't count.
            aliceMoves += match.length - 2;
        }
    }

    // Find all consecutive sequences of 'B' characters with length at least 3.
    const regexB = /B{3,}/g;
    const matchesB = colors.match(regexB);
    if (matchesB) {
        for (const match of matchesB) {
            // Calculate the number of moves made by Bob for each match.
            // Subtract 2 because the first character doesn't count.
            bobMoves += match.length - 2;
        }
    }

    // Compare the number of moves made by Alice and Bob.
    // Return true if Alice made more moves, indicating her win.
    // Otherwise, return false.
    return aliceMoves > bobMoves;
}
