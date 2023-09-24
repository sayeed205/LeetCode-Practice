function champagneTower(
    poured: number,
    query_row: number,
    query_glass: number
): number {
    // Create a 2D array to represent the champagne in each glass
    const tower: number[][] = new Array(101)
        .fill(null)
        .map(() => new Array(101).fill(0));

    // Pour the initial amount of champagne into the top glass
    tower[0][0] = poured;

    // Iterate through each row and glass to distribute champagne
    for (let i = 0; i <= query_row; i++) {
        for (let j = 0; j <= i; j++) {
            // Calculate the excess champagne that flows to the glasses below
            const excess = (tower[i][j] - 1) / 2;
            if (excess > 0) {
                // Distribute excess champagne to the glasses below and to the right
                tower[i + 1][j] += excess;
                tower[i + 1][j + 1] += excess;
            }
        }
    }

    // Ensure the value in the specified glass is between 0 and 1
    const result = Math.min(1, tower[query_row][query_glass]);

    return result;
}
