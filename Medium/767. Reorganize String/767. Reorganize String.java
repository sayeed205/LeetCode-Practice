class Solution {
    public String reorganizeString(String s) {
        int[] charCount = new int[26];
        
        for (char c : s.toCharArray()) {
            charCount[c - 'a']++;
        }
        
        int maxCount = Arrays.stream(charCount).max().getAsInt();
        if (maxCount > (s.length() + 1) / 2) {
            return "";
        }
        
        char[] result = new char[s.length()];
        int evenIndex = 0, oddIndex = 1;
        int halfLength = s.length() / 2;
        
        for (int i = 0; i < 26; i++) {
            char c = (char) ('a' + i);
            
            while (charCount[i] > 0 && charCount[i] <= halfLength && oddIndex < s.length()) {
                result[oddIndex] = c;
                charCount[i]--;
                oddIndex += 2;
            }
            
            while (charCount[i] > 0) {
                result[evenIndex] = c;
                charCount[i]--;
                evenIndex += 2;
            }
        }
        
        return new String(result);
    }
}