impl Solution {
    pub fn minimum_replacement(nums: Vec<i32>) -> i64 {
        let mut operations = 0;
        let mut prev_bound = nums[nums.len() - 1];

        for &num in nums.iter().rev().skip(1) {
            let no_of_times = (num + prev_bound - 1) / prev_bound;
            operations += (no_of_times - 1) as i64;
            prev_bound = num / no_of_times;
        }

        operations
    }
}
