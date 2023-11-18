/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b);

    let maxPairSum = 0;
    const n = nums.length;

    for (let i = 0; i < n / 2; i++) {
        maxPairSum = Math.max(maxPairSum, nums[i] + nums[n - i - 1]);
    }

    return maxPairSum;
};
