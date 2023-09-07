impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut k = 0; // Initialize the count of non-val elements

        // Iterate through the vector
        for i in 0..nums.len() {
            if nums[i] != val {
                nums[k] = nums[i]; // Move the non-val element to the front
                k += 1; // Increment the count of non-val elements
            }
        }

        k as i32 // Return the count of non-val elements as i32
    }
}
