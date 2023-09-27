impl Solution {
    pub fn decode_at_index(s: String, k: i32) -> String {
        let mut k = k as i64; // Convert k to i64 for arithmetic operations.
        let mut size: i64 = 0;

        // Calculate the total size of the decoded string.
        for ch in s.chars() {
            if ch.is_digit(10) {
                let digit = ch.to_digit(10).unwrap() as i64;
                size *= digit;
            } else {
                size += 1;
            }
        }

        // Start decoding the string from the end.
        for ch in s.chars().rev() {
            if ch.is_digit(10) {
                let digit = ch.to_digit(10).unwrap() as i64;
                size /= digit; // Undo the size multiplication.
                k %= size; // Reduce k considering the current size.
            } else {
                if k == 0 || k == size {
                    return ch.to_string();
                }
                size -= 1; // Reduce size for letters.
            }
        }

        String::from("") // Return an empty string if no result found (shouldn't happen in this problem).
    }
}
