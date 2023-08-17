class Solution {
    public int romanToInt(String s) {
        Map<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            if (i > 0 && romanValues.get(s.charAt(i)) > romanValues.get(s.charAt(i - 1))) {
                result += romanValues.get(s.charAt(i)) - 2 * romanValues.get(s.charAt(i - 1));
            } else {
                result += romanValues.get(s.charAt(i));
            }
        }

        return result;
    }
}
