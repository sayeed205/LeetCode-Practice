impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return String::new();
        }

        let first_str = strs[0].as_bytes();
        for i in 0..first_str.len() {
            let c = first_str[i];
            for j in 1..strs.len() {
                let str_bytes = strs[j].as_bytes();
                if i >= str_bytes.len() || str_bytes[i] != c {
                    return String::from_utf8(first_str[..i].to_vec()).unwrap();
                }
            }
        }

        strs[0].clone()
    }
}
