/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    const rows = [];

    // Calculate the strength of each row and store it with the row index
    for (let i = 0; i < mat.length; i++) {
        const strength = mat[i].reduce((acc, val) => acc + val, 0);
        rows.push({ strength, index: i });
    }

    // Sort the rows by strength and index in case of a tie
    rows.sort((a, b) => {
        if (a.strength !== b.strength) {
            return a.strength - b.strength;
        } else {
            return a.index - b.index;
        }
    });

    const result = [];

    // Extract the indices of the k weakest rows
    for (let i = 0; i < k; i++) {
        result.push(rows[i].index);
    }

    return result;
};
