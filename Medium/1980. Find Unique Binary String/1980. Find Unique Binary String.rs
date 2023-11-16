impl Solution {
    pub fn find_different_binary_string(nums: Vec<String>) -> String {
        let mut result = String::new();

        for i in 0..nums.len() {
            // If the current character at position i is '0', append '1'; otherwise, append '0'.
            result.push(if &nums[i][i..i + 1] == "0" { '1' } else { '0' });
        }

        result
    }
}
