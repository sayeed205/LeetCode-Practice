impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let mut roman_values = std::collections::HashMap::new();
        roman_values.insert('I', 1);
        roman_values.insert('V', 5);
        roman_values.insert('X', 10);
        roman_values.insert('L', 50);
        roman_values.insert('C', 100);
        roman_values.insert('D', 500);
        roman_values.insert('M', 1000);

        let mut result = 0;

        let s_chars = s.chars().collect::<Vec<char>>();

        for i in 0..s_chars.len() {
            if i > 0 && roman_values[&s_chars[i]] > roman_values[&s_chars[i - 1]] {
                result += roman_values[&s_chars[i]] - 2 * roman_values[&s_chars[i - 1]];
            } else {
                result += roman_values[&s_chars[i]];
            }
        }

        result
    }
}
