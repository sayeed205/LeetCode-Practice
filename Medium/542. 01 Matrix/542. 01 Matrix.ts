function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    const result: number[][] = new Array(m)
        .fill(0)
        .map(() => new Array(n).fill(0));
    const queue: [number, number][] = [];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c]);
            } else {
                result[r][c] = -1; // Marked as not processed yet!
            }
        }
    }

    const dirs: [number, number][] = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    while (queue.length > 0) {
        const curr = queue.shift()!;
        const r = curr[0];
        const c = curr[1];

        for (const dir of dirs) {
            const nr = r + dir[0];
            const nc = c + dir[1];

            if (
                nr >= 0 &&
                nr < m &&
                nc >= 0 &&
                nc < n &&
                result[nr][nc] === -1
            ) {
                result[nr][nc] = result[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    return result;
}
