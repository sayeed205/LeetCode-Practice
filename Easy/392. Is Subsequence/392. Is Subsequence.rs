impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let s_chars: Vec<char> = s.chars().collect();
        let t_chars: Vec<char> = t.chars().collect();
        let mut s_ptr = 0;
        let mut t_ptr = 0;

        while s_ptr < s_chars.len() && t_ptr < t_chars.len() {
            if s_chars[s_ptr] == t_chars[t_ptr] {
                s_ptr += 1;
            }
            t_ptr += 1;
        }

        s_ptr == s_chars.len()
    }
}
