import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int longestStrChain(String[] words) {
        // Sort the words by their length in ascending order.
        Arrays.sort(words, (a, b) -> a.length() - b.length());
        
        // Create a map to store the length of the longest chain for each word.
        Map<String, Integer> dp = new HashMap<>();
        int maxChainLength = 1;

        for (String word : words) {
            dp.put(word, 1);

            // Generate all possible predecessors of the current word by removing one character.
            for (int i = 0; i < word.length(); i++) {
                String predecessor = word.substring(0, i) + word.substring(i + 1);

                // Check if the predecessor exists in the map and update the chain length.
                if (dp.containsKey(predecessor)) {
                    dp.put(word, Math.max(dp.get(word), dp.get(predecessor) + 1));
                }
            }

            // Update the maximum chain length for the current word.
            maxChainLength = Math.max(maxChainLength, dp.get(word));
        }

        return maxChainLength;
    }
}
