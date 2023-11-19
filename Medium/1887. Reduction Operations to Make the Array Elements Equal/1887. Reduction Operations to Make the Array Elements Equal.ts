function reductionOperations(nums: number[]): number {
    nums.sort((a, b) => b - a); // Sort in descending order

    let operations: number = 0;
    let nextLargest: number = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nextLargest) {
            nextLargest = nums[i];
            operations += i;
        }
    }

    return operations;
}
