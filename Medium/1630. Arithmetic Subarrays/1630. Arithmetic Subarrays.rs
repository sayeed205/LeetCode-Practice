impl Solution {
    pub fn check_arithmetic_subarrays(nums: Vec<i32>, l: Vec<i32>, r: Vec<i32>) -> Vec<bool> {
        l.iter()
            .zip(r.iter())
            .map(|(s, e)| &nums[(*s as usize)..(*e as usize + 1)])
            .map(|slice| Self::is_arithmetic(slice))
            .collect()
    }

    fn is_arithmetic(slice: &[i32]) -> bool {
        let mut cloned: Vec<i32> = vec![0; slice.len()];
        cloned.clone_from_slice(slice);
        cloned.sort_unstable();

        let diff = cloned[1] - cloned[0];

        for w in cloned.windows(2) {
            if w[1] - w[0] != diff {
                return false;
            }
        }

        true
    }
}
