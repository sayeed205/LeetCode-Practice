impl Solution {
    pub fn reduction_operations(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort_unstable_by(|a, b| b.cmp(a)); // Sort in descending order
        
        let mut operations = 0;
        let mut next_largest = nums[0];
        
        for i in 1..nums.len() {
            if nums[i] < next_largest {
                next_largest = nums[i];
                operations += i as i32;
            }
        }
        
        operations
    }
}
