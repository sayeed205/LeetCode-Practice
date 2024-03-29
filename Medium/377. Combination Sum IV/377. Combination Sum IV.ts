function combinationSum4(nums: number[], target: number): number {
    const dp: number[] = new Array(target + 1).fill(0);
    dp[0] = 1; // There's one way to make target 0, which is by not selecting any number.

    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i >= num) {
                dp[i] += dp[i - num];
            }
        }
    }

    return dp[target];
}
