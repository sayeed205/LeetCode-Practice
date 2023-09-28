/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let left = 0; // Pointer for even numbers

    for (let right = 0; right < nums.length; right++) {
        // If the current number is even, swap it with the left pointer
        if (nums[right] % 2 === 0) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++; // Move the left pointer to the right
        }
    }

    return nums;
};
