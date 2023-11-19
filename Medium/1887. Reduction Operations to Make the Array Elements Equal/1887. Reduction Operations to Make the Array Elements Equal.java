import java.util.Arrays;

class Solution {
    public int reductionOperations(int[] nums) {
        Arrays.sort(nums);
        int operations = 0;
        int nextLargest = nums[nums.length - 1];

        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] < nextLargest) {
                nextLargest = nums[i];
                operations += nums.length - i - 1;
            }
        }

        return operations;
    }
}
