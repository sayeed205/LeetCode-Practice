class Solution {
    public String longestPalindrome(String s) {
        int len = s.length();
        
        if (len <= 1) {
            return s;
        }
        
        boolean[][] dp = new boolean[len][len];
        int start = 0;
        int maxLen = 1;
        
        // All substrings of length 1 are palindromes.
        for (int i = 0; i < len; i++) {
            dp[i][i] = true;
        }
        
        // Check for palindromes of length 2.
        for (int i = 0; i < len - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                dp[i][i + 1] = true;
                start = i;
                maxLen = 2;
            }
        }
        
        // Check for palindromes of length greater than 2.
        for (int k = 3; k <= len; k++) {
            for (int i = 0; i <= len - k; i++) {
                int j = i + k - 1;
                
                if (dp[i + 1][j - 1] && s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = true;
                    
                    if (k > maxLen) {
                        start = i;
                        maxLen = k;
                    }
                }
            }
        }
        
        return s.substring(start, start + maxLen);
    }
}
