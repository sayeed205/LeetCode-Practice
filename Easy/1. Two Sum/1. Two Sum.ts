function twoSum(nums: number[], target: number): number[] {
    const numToIndex: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex[complement] !== undefined) {
            return [numToIndex[complement], i];
        }
        numToIndex[nums[i]] = i;
    }

    throw new Error('No two elements add up to the target.');
}
