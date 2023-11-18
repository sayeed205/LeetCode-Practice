import java.util.Arrays;

class Solution {
    public int minPairSum(int[] nums) {
        Arrays.sort(nums);

        int maxPairSum = 0;
        int n = nums.length;

        for (int i = 0; i < n / 2; i++) {
            maxPairSum = Math.max(maxPairSum, nums[i] + nums[n - i - 1]);
        }

        return maxPairSum;
    }
}
