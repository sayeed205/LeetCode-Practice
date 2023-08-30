function minimumReplacement(nums: number[]): number {
    let operations = 0;
    let prevBound = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        const num = nums[i];
        const noOfTimes = Math.ceil(num / prevBound);
        operations += noOfTimes - 1;
        prevBound = Math.floor(num / noOfTimes);
    }

    return operations;
}
