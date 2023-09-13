impl Solution {
    pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {
        let mut sorted_nums = nums.clone();
        sorted_nums.sort_unstable_by(|a, b| b.cmp(a));
        sorted_nums[k as usize - 1]
    }
}
