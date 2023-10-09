/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let result = [-1, -1];
    const n = nums.length;

    // Find the leftmost position of the target
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (left < n && nums[left] === target) {
        result[0] = left;
    }

    // Find the rightmost position of the target
    left = 0;
    right = n - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (right >= 0 && nums[right] === target) {
        result[1] = right;
    }

    return result;
};
