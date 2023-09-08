impl Solution {
    pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        if num_rows == 0 {
            return Vec::new();
        }

        let mut result = Vec::new();
        result.push(vec![1]); // The first row is always [1].

        for i in 1..num_rows as usize {
            let prev_row = &result[i - 1];
            let mut new_row = Vec::new();

            new_row.push(1); // The first element is always 1.

            for j in 1..i {
                // Calculate the value using the formula: C(n, k) = C(n-1, k-1) + C(n-1, k)
                let value = prev_row[j - 1] + prev_row[j];
                new_row.push(value);
            }

            new_row.push(1); // The last element is always 1.
            result.push(new_row);
        }

        result
    }
}
