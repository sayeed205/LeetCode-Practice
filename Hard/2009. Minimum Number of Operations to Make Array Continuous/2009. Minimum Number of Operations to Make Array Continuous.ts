function minOperations(nums: number[]): number {
    const n: number = nums.length;
    const uniqueArr = [...new Set(nums)];
    uniqueArr.sort((a, b) => a - b);

    let ans = n;

    const bisectRight = (nums: number[], target: number): number => {
        let left: number = 0;
        let right: number = nums.length;

        while (left < right) {
            const mid: number = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    };

    for (let i = 0; i < uniqueArr.length; i++) {
        const left: number = uniqueArr[i];
        const right: number = left + n - 1;
        const j: number = bisectRight(uniqueArr, right);
        const count: number = j - i;
        ans = Math.min(ans, n - count);
    }

    return ans;
}
