import java.util.*;

class Solution {
    public int minCostConnectPoints(int[][] points) {
        int n = points.length;
        boolean[] visited = new boolean[n];
        int[] minCosts = new int[n];
        Arrays.fill(minCosts, Integer.MAX_VALUE);
        
        // Start from the first point
        minCosts[0] = 0;
        int minCost = 0;
        
        for (int i = 0; i < n; i++) {
            int minIdx = -1;
            
            // Find the unvisited point with the minimum cost to connect
            for (int j = 0; j < n; j++) {
                if (!visited[j] && (minIdx == -1 || minCosts[j] < minCosts[minIdx])) {
                    minIdx = j;
                }
            }
            
            // Mark the selected point as visited
            visited[minIdx] = true;
            minCost += minCosts[minIdx];
            
            // Update the minimum costs for the remaining unvisited points
            for (int j = 0; j < n; j++) {
                if (!visited[j]) {
                    int cost = Math.abs(points[minIdx][0] - points[j][0]) + Math.abs(points[minIdx][1] - points[j][1]);
                    minCosts[j] = Math.min(minCosts[j], cost);
                }
            }
        }
        
        return minCost;
    }
}
