/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
    const n = nums.length;
    const dp = new Array(n);
    let maxSum = nums[0];

    const deque = [];

    for (let i = 0; i < n; i++) {
        // Calculate the maximum value between 0 and the sum of previous values
        nums[i] += deque.length > 0 ? Math.max(0, dp[deque[0]]) : 0;

        // Pop elements from the front of the deque that are out of the range k
        while (deque.length > 0 && i - deque[0] >= k) {
            deque.shift();
        }

        // Update maxSum
        maxSum = Math.max(maxSum, nums[i]);

        // Pop elements from the back of the deque that are smaller than the current element
        while (deque.length > 0 && nums[i] >= dp[deque[deque.length - 1]]) {
            deque.pop();
        }

        // Push the current index into the deque
        deque.push(i);

        // Update dp array
        dp[i] = nums[i];
    }

    return maxSum;
};
