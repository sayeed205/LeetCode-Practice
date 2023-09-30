impl Solution {
    pub fn find132pattern(nums: Vec<i32>) -> bool {
        let n = nums.len();
        if n < 3 {
            return false;
        }

        let mut stack: Vec<i32> = Vec::new();
        let mut third = i32::MIN;

        for i in (0..n).rev() {
            let num_i = nums[i];

            if num_i < third {
                return true;
            }

            while !stack.is_empty() && num_i > stack[stack.len() - 1] {
                third = stack.pop().unwrap();
            }

            if num_i > third {
                stack.push(num_i);
            }
        }

        false
    }
}
