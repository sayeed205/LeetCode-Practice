use std::collections::HashMap;

impl Solution {
    pub fn min_deletions(s: String) -> i32 {
        let mut freq_map: HashMap<char, i32> = HashMap::new();

        // Count the frequency of each character
        for c in s.chars() {
            *freq_map.entry(c).or_insert(0) += 1;
        }

        let mut deletions = 0;
        let mut used_frequencies: HashMap<i32, bool> = HashMap::new();

        for &count in freq_map.values() {
            let mut count = count;
            while used_frequencies.get(&count).is_some() && count > 0 {
                count -= 1;
                deletions += 1;
            }

            if count > 0 {
                used_frequencies.insert(count, true);
            }
        }

        deletions
    }
}
