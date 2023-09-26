class Solution {
    public String removeDuplicateLetters(String s) {
        StringBuilder stack = new StringBuilder();
        int[] lastOccurrence = new int[26];
        boolean[] seen = new boolean[26];

        // Populate lastOccurrence with the last index of each character in s.
        for (int i = 0; i < s.length(); i++) {
            lastOccurrence[s.charAt(i) - 'a'] = i;
        }

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (!seen[ch - 'a']) {
                while (stack.length() > 0 && ch < stack.charAt(stack.length() - 1)
                       && i < lastOccurrence[stack.charAt(stack.length() - 1) - 'a']) {
                    seen[stack.charAt(stack.length() - 1) - 'a'] = false;
                    stack.deleteCharAt(stack.length() - 1);
                }

                seen[ch - 'a'] = true;
                stack.append(ch);
            }
        }

        return stack.toString();
    }
}
