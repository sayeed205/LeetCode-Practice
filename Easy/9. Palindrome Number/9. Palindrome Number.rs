impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 {
            return false; // Negative numbers can't be palindromes
        }

        let original = x;
        let mut reversed = 0;

        let mut x = x;
        while x > 0 {
            reversed = reversed * 10 + (x % 10);
            x /= 10;
        }

        original == reversed
    }
}
