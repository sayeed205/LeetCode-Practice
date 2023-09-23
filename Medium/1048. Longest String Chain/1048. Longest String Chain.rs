impl Solution {
    pub fn longest_str_chain(words: Vec<String>) -> i32 {
        // Sort the words by their length in ascending order.
        let mut words = words;
        words.sort_by(|a, b| a.len().cmp(&b.len()));

        // Create a HashMap to store the length of the longest chain for each word.
        let mut dp = std::collections::HashMap::new();
        let mut max_chain_length = 1;

        for word in &words {
            let mut current_chain_length = 1;

            // Generate all possible predecessors of the current word by removing one character.
            for i in 0..word.len() {
                let predecessor = format!("{}{}", &word[..i], &word[i + 1..]);

                // Check if the predecessor exists in the HashMap and update the chain length.
                if let Some(&prev_chain_length) = dp.get(&predecessor) {
                    current_chain_length = current_chain_length.max(prev_chain_length + 1);
                }
            }

            // Update the maximum chain length for the current word.
            dp.insert(word.clone(), current_chain_length);
            max_chain_length = max_chain_length.max(current_chain_length);
        }

        max_chain_length
    }
}
