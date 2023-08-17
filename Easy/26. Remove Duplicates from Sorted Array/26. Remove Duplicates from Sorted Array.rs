impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let len = nums.len();
        if len == 0 {
            return 0;
        }

        let mut k = 1; // Initialize the count of unique elements

        for i in 1..len {
            if nums[i] != nums[i - 1] {
                nums[k] = nums[i]; // Move the unique element to the next position
                k += 1; // Increment the count of unique elements
            }
        }

        k as i32
    }
}
