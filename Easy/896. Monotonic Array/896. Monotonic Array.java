class Solution {
    public boolean isMonotonic(int[] nums) {
        boolean increasing = false;
        boolean decreasing = false;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                increasing = true;
            } else if (nums[i] < nums[i - 1]) {
                decreasing = true;
            }

            if (increasing && decreasing) {
                // If we find both increasing and decreasing elements, the array is not monotonic.
                return false;
            }
        }

        return true;
    }
}
