impl Solution {
    pub fn full_justify(words: Vec<String>, max_width: i32) -> Vec<String> {
        let mut result = Vec::new();
        let mut line = Vec::new();
        let mut line_length = 0;

        for word in words {
            if line_length + line.len() as i32 + word.len() as i32 <= max_width {
                line.push(word.clone()); // Clone the string to take ownership
                line_length += word.len() as i32;
            } else {
                let mut line_str = String::new();
                if line.len() == 1 {
                    line_str.push_str(&line[0]);
                    line_str.push_str(&" ".repeat((max_width - line_length) as usize));
                } else {
                    let total_spaces = max_width - line_length;
                    let gaps = line.len() - 1;
                    let space_per_gap = total_spaces / gaps as i32;
                    let extra_spaces = total_spaces % gaps as i32;

                    for i in 0..line.len() - 1 {
                        line_str.push_str(&line[i]);
                        line_str.push_str(&" ".repeat(space_per_gap as usize));
                        if i < extra_spaces as usize {
                            line_str.push(' ');
                        }
                    }
                    line_str.push_str(&line[line.len() - 1]);
                }

                result.push(line_str);
                line.clear();
                line.push(word.clone()); // Clone the string to take ownership
                line_length = word.len() as i32;
            }
        }

        let last_line = line.join(" ");
        let padding = max_width - last_line.len() as i32;
        result.push(format!("{0}{1}", last_line, " ".repeat(padding as usize)));

        result
    }
}
