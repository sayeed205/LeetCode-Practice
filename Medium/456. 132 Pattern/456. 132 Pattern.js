/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    const n = nums.length;
    if (n < 3) {
        return false;
    }

    const stack = [];
    let third = Number.NEGATIVE_INFINITY;

    for (let i = n - 1; i >= 0; i--) {
        const num_i = nums[i];

        if (num_i < third) {
            return true;
        }

        while (stack.length > 0 && num_i > stack[stack.length - 1]) {
            third = stack.pop();
        }

        if (num_i > third) {
            stack.push(num_i);
        }
    }

    return false;
};
