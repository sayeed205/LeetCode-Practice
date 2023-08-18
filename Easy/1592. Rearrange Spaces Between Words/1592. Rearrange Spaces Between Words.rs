impl Solution {
    pub fn reorder_spaces(text: String) -> String {
        let words: Vec<&str> = text.trim().split_whitespace().collect();
        let word_count = words.len();
        let space_count = text.chars().filter(|&c| c == ' ').count();

        if word_count == 1 {
            return format!("{}{}", words[0], " ".repeat(space_count));
        }

        let spaces_between = space_count / (word_count - 1);
        let extra_spaces = space_count % (word_count - 1);
        let spaces_between_str = " ".repeat(spaces_between);

        let mut result = String::new();
        for i in 0..word_count {
            result.push_str(words[i]);
            if i < word_count - 1 {
                result.push_str(&spaces_between_str);
            }
        }

        result.push_str(&" ".repeat(extra_spaces));

        result
    }
}
