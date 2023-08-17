use std::collections::HashMap;

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();
        let bracket_map: HashMap<char, char> = [(')', '('), (']', '['), ('}', '{')]
            .iter()
            .cloned()
            .collect();

        for c in s.chars() {
            if c == '(' || c == '[' || c == '{' {
                stack.push(c);
            } else if c == ')' || c == ']' || c == '}' {
                if let Some(&top) = stack.last() {
                    if let Some(&matching_bracket) = bracket_map.get(&c) {
                        if top != matching_bracket {
                            return false;
                        }
                        stack.pop();
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }

        stack.is_empty()
    }
}
