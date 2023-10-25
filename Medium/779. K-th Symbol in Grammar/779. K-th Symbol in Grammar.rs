impl Solution {
    pub fn kth_grammar(n: i32, k: i32) -> i32 {
        if n == 1 {
            return 0;
        }

        // Calculate the midpoint of the previous row
        let mid = 2_i32.pow(n as u32 - 2);

        // If k is less than or equal to mid, it's the same as in the previous row.
        if k <= mid {
            Solution::kth_grammar(n - 1, k)
        } else {
            // If k is greater than mid, it's the opposite of the symbol in the previous row.
            1 - Solution::kth_grammar(n - 1, k - mid)
        }
    }
}
