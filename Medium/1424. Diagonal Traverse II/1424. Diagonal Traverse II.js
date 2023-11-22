var findDiagonalOrder = function (nums) {
    const n = nums.length;
    const temp = [];

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

    const result = [];
    for (const row of temp) {
        result.push(...row);
    }

    return result;
};
