impl Solution {
    pub fn get_last_moment(n: i32, left: Vec<i32>, right: Vec<i32>) -> i32 {
        let left_time = left.iter().map(|&position| position).max().unwrap_or(0);
        let right_time = right
            .iter()
            .map(|&position| n - position)
            .max()
            .unwrap_or(0);
        std::cmp::max(left_time, right_time)
    }
}
