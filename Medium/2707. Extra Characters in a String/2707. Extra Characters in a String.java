import java.util.HashSet;
import java.util.Set;

public class Solution {
    public int minExtraChar(String s, String[] dictionary) {
        int maxVal = s.length() + 1;
        Set<String> dictionarySet = new HashSet<>();
        
        for (String word : dictionary) {
            dictionarySet.add(word);
        }

        int[] dp = new int[s.length() + 1];
        for (int i = 1; i <= s.length(); i++) {
            dp[i] = dp[i - 1] + 1;
            for (int l = 1; l <= i; l++) {
                String substring = s.substring(i - l, i);
                if (dictionarySet.contains(substring)) {
                    dp[i] = Math.min(dp[i], dp[i - l]);
                }
            }
        }

        return dp[s.length()];
    }
}
