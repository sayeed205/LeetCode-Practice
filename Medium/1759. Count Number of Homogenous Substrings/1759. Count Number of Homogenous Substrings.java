class Solution {
    public int countHomogenous(String s) {
        final int MOD = 1_000_000_007;
        int count = 0;
        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            if (i == 0 || s.charAt(i) == s.charAt(i - 1)) {
                count++;
            } else {
                count = 1;
            }

            result = (result + count) % MOD;
        }

        return result;
    }
}
