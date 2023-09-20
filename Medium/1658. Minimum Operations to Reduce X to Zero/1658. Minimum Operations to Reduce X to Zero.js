/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let total = nums.reduce((acc, num) => acc + num, 0);
    let target = total - x;
    let left = 0;
    let n = nums.length;
    let maxLength = -1;
    let runningSum = 0;

    for (let right = 0; right < n; right++) {
        runningSum += nums[right];

        while (runningSum > target && left <= right) {
            runningSum -= nums[left];
            left++;
        }

        if (runningSum === target) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }

    return maxLength !== -1 ? n - maxLength : -1;
};
