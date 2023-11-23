function checkArithmeticSubarrays(
    nums: number[],
    l: number[],
    r: number[]
): boolean[] {
    return l.map((start, index) => {
        const subarray = nums.slice(start, r[index] + 1);
        return isArithmetic(subarray);
    });
}

function isArithmetic(subarray: number[]): boolean {
    const cloned = [...subarray];
    cloned.sort((a, b) => a - b);

    const diff = cloned[1] - cloned[0];

    for (let i = 1; i < cloned.length - 1; i++) {
        if (cloned[i + 1] - cloned[i] !== diff) {
            return false;
        }
    }

    return true;
}
