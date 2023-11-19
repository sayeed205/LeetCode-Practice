/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    nums.sort((a, b) => b - a); // Sort in descending order

    let operations = 0;
    let nextLargest = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nextLargest) {
            nextLargest = nums[i];
            operations += i;
        }
    }

    return operations;
};
