class Solution {
    public boolean backspaceCompare(String s, String t) {
        int i = s.length() - 1;
        int j = t.length() - 1;

        while (i >= 0 || j >= 0) {
            int backspaceCountS = 0;
            while (i >= 0 && (s.charAt(i) == '#' || backspaceCountS > 0)) {
                if (s.charAt(i) == '#') {
                    backspaceCountS++;
                } else {
                    backspaceCountS--;
                }
                i--;
            }

            int backspaceCountT = 0;
            while (j >= 0 && (t.charAt(j) == '#' || backspaceCountT > 0)) {
                if (t.charAt(j) == '#') {
                    backspaceCountT++;
                } else {
                    backspaceCountT--;
                }
                j--;
            }

            if (i < 0 || j < 0) {
                return i < 0 && j < 0; // Both strings are empty.
            }

            if (s.charAt(i) != t.charAt(j)) {
                return false;
            }

            i--;
            j--;
        }

        return true;
    }
}
