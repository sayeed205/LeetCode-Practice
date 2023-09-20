impl Solution {
    pub fn min_operations(nums: Vec<i32>, x: i32) -> i32 {
        let total: i32 = nums.iter().sum();
        let target = total - x;
        let mut left = 0;
        let mut running_sum = 0;
        let mut max_length = -1;

        for (right, &num) in nums.iter().enumerate() {
            running_sum += num;

            while running_sum > target && left <= right {
                running_sum -= nums[left];
                left += 1;
            }

            if running_sum == target {
                max_length = max_length.max((right - left + 1) as i32);
            }
        }

        if max_length == -1 {
            -1
        } else {
            nums.len() as i32 - max_length
        }
    }
}
