impl Solution {
    pub fn get_kth(lo: i32, hi: i32, k: i32) -> i32 {
        fn calculate_power(x: i32) -> i32 {
            let mut steps = 0;
            let mut x = x;
            while x != 1 {
                if x % 2 == 0 {
                    x /= 2;
                } else {
                    x = 3 * x + 1;
                }
                steps += 1;
            }
            steps
        }

        let mut nums = Vec::new();

        for i in lo..=hi {
            nums.push((i, calculate_power(i)));
        }

        nums.sort_unstable_by(|a, b| a.1.cmp(&b.1).then(a.0.cmp(&b.0)));

        nums[k as usize - 1].0
    }
}
