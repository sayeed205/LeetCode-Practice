function getRow(rowIndex: number): number[] {
    const row: number[] = new Array(rowIndex + 1).fill(0);
    row[0] = 1;

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i; j >= 1; j--) {
            row[j] += row[j - 1];
        }
    }

    return row;
}
