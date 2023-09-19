impl Solution {
    pub fn find_duplicate(nums: Vec<i32>) -> i32 {
        let mut left = 1;
        let mut right = nums.len() as i32 - 1;
        let mut result = -1;

        while left <= right {
            let mid = left + (right - left) / 2;
            let mut count = 0;

            for num in &nums {
                if *num <= mid {
                    count += 1;
                }
            }

            if count > mid {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result
    }
}
