impl Solution {
    pub fn sort_array_by_parity(nums: Vec<i32>) -> Vec<i32> {
        let mut even_nums = Vec::new();
        let mut odd_nums = Vec::new();

        for num in nums {
            if num % 2 == 0 {
                even_nums.push(num);
            } else {
                odd_nums.push(num);
            }
        }

        even_nums.extend(odd_nums);
        even_nums
    }
}
