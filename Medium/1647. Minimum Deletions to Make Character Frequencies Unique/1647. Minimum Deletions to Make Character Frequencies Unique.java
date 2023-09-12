import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution {
    public int minDeletions(String s) {
        Map<Character, Integer> freqMap = new HashMap<>();

        // Count the frequency of each character
        for (char c : s.toCharArray()) {
            freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
        }

        int deletions = 0;
        Set<Integer> usedFrequencies = new HashSet<>();

        for (int count : freqMap.values()) {
            int currentCount = count;
            while (usedFrequencies.contains(currentCount) && currentCount > 0) {
                currentCount--;
                deletions++;
            }

            if (currentCount > 0) {
                usedFrequencies.add(currentCount);
            }
        }

        return deletions;
    }
}
