class Solution {
    public int maximumScore(int[] nums, int k) {
        int left = k;
        int right = k;
        int minVal = nums[k];
        int maxScore = minVal;

        while (left > 0 || right < nums.length - 1) {
            if (left == 0 || (right < nums.length - 1 && nums[right + 1] > nums[left - 1])) {
                right++;
            } else {
                left--;
            }
            minVal = Math.min(minVal, Math.min(nums[left], nums[right]));
            maxScore = Math.max(maxScore, minVal * (right - left + 1));
        }

        return maxScore;
    }
}
