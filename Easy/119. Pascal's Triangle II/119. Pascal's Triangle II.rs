impl Solution {
    pub fn get_row(row_index: i32) -> Vec<i32> {
        let mut row = vec![1; row_index as usize + 1];

        for i in 0..(row_index as usize + 1) {
            let mut prev = 1;
            for j in 1..i {
                let temp = row[j];
                row[j] += prev;
                prev = temp;
            }
        }

        row
    }
}
