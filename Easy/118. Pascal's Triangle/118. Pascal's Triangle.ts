function generate(numRows: number): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        const row: number[] = [];
        row.push(1); // The first element is always 1.

        for (let j = 1; j < i; j++) {
            // Calculate the value using the formula: C(n, k) = C(n-1, k-1) + C(n-1, k)
            const value = result[i - 1][j - 1] + result[i - 1][j];
            row.push(value);
        }

        if (i > 0) {
            row.push(1); // The last element is always 1 except for the first row.
        }

        result.push(row);
    }

    return result;
}
