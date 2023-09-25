impl Solution {
    pub fn find_the_difference(s: String, t: String) -> char {
        // Create a mutable vector to store the counts of each character in s and t
        let mut char_counts = vec![0; 26];

        // Iterate through string s and increment the counts for each character
        for ch in s.chars() {
            let index = (ch as u8 - b'a') as usize;
            char_counts[index] += 1;
        }

        // Iterate through string t and decrement the counts for each character
        for ch in t.chars() {
            let index = (ch as u8 - b'a') as usize;
            char_counts[index] -= 1;
        }

        // Find the character with a count of -1, which is the added character
        for (i, count) in char_counts.iter().enumerate() {
            if *count == -1 {
                return (i as u8 + b'a') as char;
            }
        }

        // This should not happen if the input is valid, but return a default character
        return ' ';
    }
}
