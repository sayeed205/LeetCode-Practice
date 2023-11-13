impl Solution {
    pub fn sort_vowels(s: String) -> String {
        let mut s = s.into_bytes();
        let mut pos = Vec::new();
        let mut change = Vec::new();

        for (i, &b) in s.iter().enumerate() {
            if [b'a', b'e', b'i', b'o', b'u'].contains(&b.to_ascii_lowercase()) {
                pos.push(i);
                change.push(b);
            }
        }

        change.sort_unstable();

        for (i, b) in pos.into_iter().zip(change.into_iter()) {
            s[i] = b;
        }

        unsafe {
            String::from_utf8_unchecked(s)
        }
    }
}
