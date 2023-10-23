impl Solution {
    pub fn is_power_of_four(n: i32) -> bool {
        if n <= 0 {
            return false;
        }

        // Check if n is a power of 2
        if n & (n - 1) == 0 {
            // Check if the logarithm of n to the base 4 is an integer
            let log_result = (n as f64).log(4.0);
            log_result.fract() == 0.0
        } else {
            false
        }
    }
}
