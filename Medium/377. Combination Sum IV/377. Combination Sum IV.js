/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    var dp = new Array(target + 1).fill(0);
    dp[0] = 1; // There's one way to make target 0, which is by not selecting any number.

    for (var i = 1; i <= target; i++) {
        for (var num of nums) {
            if (i >= num) {
                dp[i] += dp[i - num];
            }
        }
    }

    return dp[target];
};
