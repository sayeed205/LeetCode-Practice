function maximumScore(nums: number[], k: number): number {
    let left: number = k;
    let right: number = k;
    let minVal: number = nums[k];
    let maxScore: number = minVal;

    while (left > 0 || right < nums.length - 1) {
        if (
            left === 0 ||
            (right < nums.length - 1 && nums[right + 1] > nums[left - 1])
        ) {
            right++;
        } else {
            left--;
        }
        minVal = Math.min(minVal, Math.min(nums[left], nums[right]));
        maxScore = Math.max(maxScore, minVal * (right - left + 1));
    }

    return maxScore;
}
