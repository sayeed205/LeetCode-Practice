function minimumEffortPath(heights: number[][]): number {
    const rows = heights.length;
    const columns = heights[0].length;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]; // Right, Down, Left, Up

    // Helper function to check if a cell is within bounds
    const isInside = (row: number, col: number): boolean => {
        return row >= 0 && row < rows && col >= 0 && col < columns;
    };

    // Initialize distances with Infinity
    const distances: number[][] = new Array(rows)
        .fill([])
        .map(() => new Array(columns).fill(Infinity));
    distances[0][0] = 0; // Start from (0, 0)

    // Priority queue to store cells with their efforts
    const queue: [number, number, number][] = [[0, 0, 0]]; // [effort, row, col]

    while (queue.length > 0) {
        queue.sort((a, b) => a[0] - b[0]); // Sort by effort

        const [effort, row, col] = queue.shift()!;

        if (row === rows - 1 && col === columns - 1) {
            return effort; // Reached the bottom-right cell
        }

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (isInside(newRow, newCol)) {
                const newEffort = Math.max(
                    effort,
                    Math.abs(heights[row][col] - heights[newRow][newCol])
                );

                if (newEffort < distances[newRow][newCol]) {
                    distances[newRow][newCol] = newEffort;
                    queue.push([newEffort, newRow, newCol]);
                }
            }
        }
    }

    return -1; // No path found (should not happen in this problem)
}
