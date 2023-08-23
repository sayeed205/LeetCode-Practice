use std::collections::BinaryHeap;

impl Solution {
    pub fn reorganize_string(s: String) -> String {
        let mut char_count = vec![0; 26];
        for c in s.chars() {
            char_count[(c as u8 - b'a') as usize] += 1;
        }

        let mut max_heap = BinaryHeap::new();
        for (i, &count) in char_count.iter().enumerate() {
            if count > 0 {
                max_heap.push((count, (i as u8 + b'a') as char));
            }
        }

        let mut result = Vec::new();
        while let Some((count1, char1)) = max_heap.pop() {
            if let Some((count2, char2)) = max_heap.pop() {
                result.push(char1);
                result.push(char2);
                if count1 > 1 {
                    max_heap.push((count1 - 1, char1));
                }
                if count2 > 1 {
                    max_heap.push((count2 - 1, char2));
                }
            } else {
                if count1 > 1 {
                    return String::new(); // Not possible to rearrange
                } else {
                    result.push(char1);
                }
            }
        }

        result.into_iter().collect()
    }
}
