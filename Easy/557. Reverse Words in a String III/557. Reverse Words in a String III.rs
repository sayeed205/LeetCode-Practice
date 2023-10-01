impl Solution {
    pub fn reverse_words(s: String) -> String {
        // Split the input string into words using whitespace as a delimiter
        let words: Vec<&str> = s.split_whitespace().collect();

        // Create an empty vector to store the reversed words
        let mut reversed_words = Vec::new();

        // Iterate through the words and reverse each word
        for word in words {
            // Reverse the characters of the word and collect them into a string
            let reversed_word: String = word.chars().rev().collect();
            reversed_words.push(reversed_word);
        }

        // Join the reversed words with whitespace to form the final sentence
        let result = reversed_words.join(" ");

        result
    }
}
