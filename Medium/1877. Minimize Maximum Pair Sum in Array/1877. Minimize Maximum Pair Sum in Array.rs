impl Solution {
    pub fn min_pair_sum(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort();

        let mut max_pair_sum = 0;
        let n = nums.len();

        for i in 0..n / 2 {
            max_pair_sum = max_pair_sum.max(nums[i] + nums[n - i - 1]);
        }

        max_pair_sum
    }
}
