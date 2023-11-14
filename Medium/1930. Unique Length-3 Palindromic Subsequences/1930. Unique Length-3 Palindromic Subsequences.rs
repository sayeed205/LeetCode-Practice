impl Solution {
    pub fn count_palindromic_subsequence(s: String) -> i32 {
        let s = s.into_bytes();
        let mut ret = 0;

        let mut left = [usize::MAX; 26];
        let mut right = [0; 26];

        for (i, &b) in s.iter().enumerate() {
            let j = (b - b'a') as usize;
            left[j] = left[j].min(i);
            right[j] = i;
        }

        let mut used = [false; 26];
        for i in 0..26 {
            ret += count_unique_between(&s, left[i] + 1, right[i], &mut used);
        }

        ret
    }
}

fn count_unique_between(s: &[u8], start: usize, end: usize, used: &mut [bool; 26]) -> i32 {
    let mut count = 0;
    for j in start..end {
        let idx = (s[j] - b'a') as usize;
        if !used[idx] {
            used[idx] = true;
            count += 1;
        }
    }
    used.fill(false);
    count
}
