/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0; // Initialize the count of non-val elements

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move the non-val element to the front
            k++; // Increment the count of non-val elements
        }
    }

    return k; // Return the count of non-val elements
};
