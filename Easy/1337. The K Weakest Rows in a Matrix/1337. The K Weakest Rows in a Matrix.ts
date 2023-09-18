function kWeakestRows(mat: number[][], k: number): number[] {
    const rows: { strength: number; index: number }[] = [];

    for (let i = 0; i < mat.length; i++) {
        const strength = mat[i].reduce((acc, val) => acc + val, 0);
        rows.push({ strength, index: i });
    }

    rows.sort((a, b) => {
        if (a.strength !== b.strength) {
            return a.strength - b.strength;
        } else {
            return a.index - b.index;
        }
    });

    const result: number[] = [];
    for (let i = 0; i < k; i++) {
        result.push(rows[i].index);
    }

    return result;
}
