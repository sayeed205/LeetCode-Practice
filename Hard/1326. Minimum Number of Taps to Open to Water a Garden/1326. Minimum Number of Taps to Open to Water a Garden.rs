impl Solution {
    pub fn min_taps(n: i32, ranges: Vec<i32>) -> i32 {
        let mut coverage = vec![0; (n + 1) as usize];

        // Update coverage array based on tap ranges
        for i in 0..ranges.len() {
            if ranges[i] == 0 {
                continue;
            }
            let left = std::cmp::max(0, i as i32 - ranges[i]) as usize;
            coverage[left] = std::cmp::max(coverage[left], (i as i32 + ranges[i]) as usize);
        }

        let (mut end, mut farthest_can_reach, mut tap_count) = (0, 0, 0);

        // Traverse the garden and calculate required taps
        for i in 0..=n as usize {
            if i > end {
                if farthest_can_reach <= end {
                    return -1;
                }
                end = farthest_can_reach;
                tap_count += 1;
            }
            farthest_can_reach = std::cmp::max(farthest_can_reach, coverage[i]);
        }

        // Return the total taps required, considering the endpoint
        tap_count + if end < n as usize { 1 } else { 0 }
    }
}
