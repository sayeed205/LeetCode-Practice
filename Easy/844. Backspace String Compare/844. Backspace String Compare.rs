impl Solution {
    pub fn backspace_compare(s: String, t: String) -> bool {
        Self::process_string(s) == Self::process_string(t)
    }

    fn process_string(input: String) -> String {
        let mut stack: Vec<char> = Vec::new();
        for ch in input.chars() {
            if ch == '#' {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }
        stack.into_iter().collect()
    }
}
