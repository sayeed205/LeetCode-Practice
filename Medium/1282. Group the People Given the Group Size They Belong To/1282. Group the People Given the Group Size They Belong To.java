import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        Map<Integer, List<Integer>> groups = new HashMap<>(); // Using a map to store groups
        List<List<Integer>> result = new ArrayList<>(); // Initialize the result list

        for (int i = 0; i < groupSizes.length; i++) {
            int size = groupSizes[i];

            if (!groups.containsKey(size)) {
                groups.put(size, new ArrayList<>()); // Initialize the group if it doesn't exist
            }

            groups.get(size).add(i); // Add the person to the corresponding group

            if (groups.get(size).size() == size) {
                // If the group is full, add it to the result and reset it
                result.add(groups.get(size));
                groups.put(size, new ArrayList<>());
            }
        }

        for (List<Integer> group : groups.values()) {
            if (!group.isEmpty()) {
                result.add(group); // Add any remaining groups to the result
            }
        }

        return result;
    }
}
