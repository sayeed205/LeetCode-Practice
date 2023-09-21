impl Solution {
    pub fn find_kth_number(m: i32, n: i32, k: i32) -> i32 {
        let mut left = 1;
        let mut right = m * n;

        while left < right {
            let mid = left + (right - left) / 2;

            // Count the number of elements less than or equal to mid in the multiplication table
            let count = Self::count_elements(m, n, mid);

            if count < k {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        left
    }

    fn count_elements(m: i32, n: i32, target: i32) -> i32 {
        let mut count = 0;
        for i in 1..=m {
            count += i32::min(target / i, n);
        }
        count
    }
}
