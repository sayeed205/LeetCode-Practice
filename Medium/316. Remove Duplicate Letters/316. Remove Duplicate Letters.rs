impl Solution {
    pub fn remove_duplicate_letters(s: String) -> String {
        let mut stack = Vec::new();
        let mut seen = [false; 26];
        let mut last_occurrence = [0; 26];

        // Populate last_occurrence with the last index of each character in s.
        for (i, ch) in s.chars().enumerate() {
            last_occurrence[ch as usize - 'a' as usize] = i;
        }

        for (i, ch) in s.chars().enumerate() {
            if !seen[ch as usize - 'a' as usize] {
                // While the stack is not empty, the current character is smaller than the top of the stack,
                // and there are more occurrences of the top character later in the string, pop from the stack.
                while let Some(&top) = stack.last() {
                    if ch < top && last_occurrence[top as usize - 'a' as usize] > i {
                        seen[top as usize - 'a' as usize] = false;
                        stack.pop();
                    } else {
                        break;
                    }
                }
                seen[ch as usize - 'a' as usize] = true;
                stack.push(ch);
            }
        }

        // Convert the stack into a String.
        stack.iter().collect()
    }
}
