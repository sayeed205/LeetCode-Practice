import java.util.Arrays;

public class Solution {
    public int maxFrequency(int[] nums, int k) {
        Arrays.sort(nums); // Sort the array

        int maxFreq = 0;
        int left = 0;
        long sum = 0; // Use long to avoid integer overflow

        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];

            // Check if we need to shrink the window
            while ((right - left + 1) * (long) nums[right] - sum > k) {
                sum -= nums[left];
                left += 1;
            }

            // Update the maximum frequency
            maxFreq = Math.max(maxFreq, right - left + 1);
        }

        return maxFreq;
    }
}
