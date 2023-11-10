import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public int[] restoreArray(int[][] adjacentPairs) {
        Map<Integer, List<Integer>> adjacencyMap = new HashMap<>();

        // Build the adjacency map
        for (int[] pair : adjacentPairs) {
            adjacencyMap.computeIfAbsent(pair[0], k -> new ArrayList<>()).add(pair[1]);
            adjacencyMap.computeIfAbsent(pair[1], k -> new ArrayList<>()).add(pair[0]);
        }

        int n = adjacentPairs.length + 1;
        int[] result = new int[n];
        Set<Integer> visited = new HashSet<>();

        // Find the starting point
        int start = 0;
        for (Map.Entry<Integer, List<Integer>> entry : adjacencyMap.entrySet()) {
            if (entry.getValue().size() == 1) {
                start = entry.getKey();
                break;
            }
        }

        // Reconstruct the array
        result[0] = start;
        result[1] = adjacencyMap.get(start).get(0);

        visited.add(start);
        visited.add(result[1]);

        for (int i = 2; i < n; i++) {
            List<Integer> neighbors = adjacencyMap.get(result[i - 1]);
            result[i] = neighbors.get(0) == result[i - 2] ? neighbors.get(1) : neighbors.get(0);

            visited.add(result[i]);
        }

        return result;
    }
}
