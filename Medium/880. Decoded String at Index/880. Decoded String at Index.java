class Solution {
    public String decodeAtIndex(String s, int k) {
        long size = 0;
        int l = s.length();

        // Calculate the total size of the decoded string
        for (int i = 0; i < l; i++) {
            if (Character.isLetter(s.charAt(i))) {
                size++;
            } else {
                size *= (s.charAt(i) - '0');
            }
        }

        // Traverse the string in reverse
        for (int i = l - 1; i >= 0; i--) {
            k %= size;

            // If k becomes zero and the current character is a letter, return it
            if (k == 0 && Character.isLetter(s.charAt(i))) {
                return String.valueOf(s.charAt(i));
            }

            // Update size based on the current character
            if (Character.isDigit(s.charAt(i))) {
                size /= (s.charAt(i) - '0');
            } else {
                size--;
            }
        }

        return "";
    }
}
