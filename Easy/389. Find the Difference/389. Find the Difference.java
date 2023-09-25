class Solution {
    public char findTheDifference(String s, String t) {
        int result = 0;

        // XOR all characters in both strings
        for (char ch : s.toCharArray()) {
            result ^= ch;
        }

        for (char ch : t.toCharArray()) {
            result ^= ch;
        }

        // The result will be the ASCII code of the added character
        return (char) result;
    }
}
