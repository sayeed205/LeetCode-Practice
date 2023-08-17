/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = 1;
    if (nums.length <= 1) return nums.length;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) nums[len++] = nums[i];
    }
    return len;
};
