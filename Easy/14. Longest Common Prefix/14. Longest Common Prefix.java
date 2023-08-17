class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }
        
        String firstStr = strs[0];
        int prefixLen = firstStr.length();
        
        for (int i = 0; i < prefixLen; i++) {
            char c = firstStr.charAt(i);
            for (int j = 1; j < strs.length; j++) {
                String str = strs[j];
                if (i >= str.length() || str.charAt(i) != c) {
                    return firstStr.substring(0, i);
                }
            }
        }
        
        return firstStr;
    }
}