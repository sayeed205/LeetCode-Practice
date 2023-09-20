public class Solution {
    public int minOperations(int[] nums, int x) {
        int total = 0;
        for (int num : nums) {
            total += num;
        }

        int target = total - x;
        int left = 0;
        int n = nums.length;
        int maxLength = -1;
        int runningSum = 0;

        for (int right = 0; right < n; right++) {
            runningSum += nums[right];

            while (runningSum > target && left <= right) {
                runningSum -= nums[left];
                left++;
            }

            if (runningSum == target) {
                maxLength = Math.max(maxLength, right - left + 1);
            }
        }

        return maxLength != -1 ? n - maxLength : -1;
    }
}
