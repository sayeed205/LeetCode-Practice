function getKth(lo: number, hi: number, k: number): number {
    function calculatePower(x: number): number {
        let steps = 0;
        while (x !== 1) {
            if (x % 2 === 0) {
                x /= 2;
            } else {
                x = 3 * x + 1;
            }
            steps++;
        }
        return steps;
    }

    const nums: [number, number][] = [];

    for (let i = lo; i <= hi; i++) {
        nums.push([i, calculatePower(i)]);
    }

    nums.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    return nums[k - 1][0];
}
