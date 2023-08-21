class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int n = s.length();
        
        for (int len = 1; len <= n / 2; len++) {
            if (n % len == 0) {
                int repeatCount = n / len;
                String pattern = s.substring(0, len);
                StringBuilder constructed = new StringBuilder();
                for (int i = 0; i < repeatCount; i++) {
                    constructed.append(pattern);
                }
                if (constructed.toString().equals(s)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}
