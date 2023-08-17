class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false; // Negative numbers or multiples of 10 can't be palindromes
        }

        int original = x;
        int reversed = 0;

        while (x > 0) {
            reversed = reversed * 10 + (x % 10);
            x /= 10;
        }

        return original == reversed;
    }
}
