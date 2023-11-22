function findDiagonalOrder(nums: number[][]): number[] {
    const n = nums.length;
    const temp: number[][] = [];

    for (let i = 0; i < n; i++) {
        const m = nums[i].length;
        for (let j = 0; j < m; j++) {
            const ti = i + j;

            if (temp.length <= ti) {
                temp.push([]);
            }
            temp[ti].unshift(nums[i][j]);
        }
    }

    const result: number[] = [];
    for (const row of temp) {
        result.push(...row);
    }

    return result;
}
