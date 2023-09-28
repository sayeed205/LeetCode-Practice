class Solution {
    public int[] sortArrayByParity(int[] nums) {
        int left = 0; // Pointer for even numbers

        for (int right = 0; right < nums.length; right++) {
            // If the current number is even, swap it with the left pointer
            if (nums[right] % 2 == 0) {
                int temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++; // Move the left pointer to the right
            }
        }

        return nums;
    }
}
