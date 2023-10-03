use std::collections::HashMap;

impl Solution {
    pub fn num_identical_pairs(nums: Vec<i32>) -> i32 {
        // Create a HashMap to store the count of each number
        let mut count_map: HashMap<i32, i32> = HashMap::new();
        let mut good_pairs = 0;

        // Iterate through the nums array
        for &num in &nums {
            // Get the count of the current number from the HashMap (default to 0)
            let count = count_map.get(&num).cloned().unwrap_or(0);

            // Increment the count in the HashMap
            count_map.insert(num, count + 1);

            // Increment the good_pairs count by the current count (i.e., the number of pairs)
            good_pairs += count;
        }

        good_pairs
    }
}
