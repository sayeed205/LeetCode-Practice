impl Solution {
    pub fn max_frequency(nums: Vec<i32>, k: i32) -> i32 {
        let mut nums = nums;
        nums.sort(); // Sort the array

        let mut max_freq = 0;
        let mut left = 0;
        let mut sum = 0;

        for right in 0..nums.len() {
            sum += nums[right];

            // Check if we need to shrink the window
            while (right - left + 1) as i32 * nums[right] - sum > k {
                sum -= nums[left];
                left += 1;
            }

            // Update the maximum frequency
            max_freq = max_freq.max(right - left + 1);
        }

        max_freq as i32
    }
}
