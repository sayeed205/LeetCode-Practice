impl Solution {
    pub fn find_longest_chain(pairs: Vec<Vec<i32>>) -> i32 {
        let mut pairs = pairs;
        pairs.sort_by(|a, b| a[0].cmp(&b[0])); // Sort in increasing order by starting point

        let mut ans = 1;
        let mut last_end = pairs[0][1];

        for pair in pairs.iter() {
            let start = pair[0];
            let end = pair[1];

            if start > last_end {
                ans += 1;
                last_end = end;
            } else {
                last_end = std::cmp::min(last_end, end);
            }
        }

        ans
    }
}
