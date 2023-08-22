impl Solution {
    pub fn convert_to_title(column_number: i32) -> String {
        let mut result = String::new();
        let mut column_number = column_number;

        while column_number > 0 {
            column_number -= 1; // Adjust to 0-based index
            let remainder = column_number % 26;
            let digit = (b'A' + remainder as u8) as char;
            result.insert(0, digit);
            column_number /= 26;
        }

        result
    }
}
