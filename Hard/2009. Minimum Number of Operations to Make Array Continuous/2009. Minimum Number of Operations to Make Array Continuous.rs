impl Solution {
    pub fn min_operations(mut nums: Vec<i32>) -> i32 {
        let n = nums.len() as i32;
        nums.sort_unstable();
        nums.dedup();
        nums.iter().enumerate().fold(n, |ops, (i, l)| {
            ops.min(n - (nums.partition_point(|&m| m < l + n) - i) as i32)
        })
    }
}
