import java.util.ArrayDeque;
import java.util.Queue;

class Solution {
    public int shortestPathLength(int[][] graph) {
        int n = graph.length;
        int targetMask = (1 << n) - 1;
        Queue<int[]> queue = new ArrayDeque<>();
        boolean[][] visited = new boolean[n][1 << n]; // DP table to store visited states

        for (int i = 0; i < n; i++) {
            queue.offer(new int[] { i, 1 << i, 0 }); // Initialize the queue with starting nodes
            visited[i][1 << i] = true;
        }

        int steps = 0;

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                int[] nodeInfo = queue.poll();
                int node = nodeInfo[0];
                int mask = nodeInfo[1];
                int cost = nodeInfo[2];

                if (mask == targetMask) {
                    return cost;
                }

                for (int neighbor : graph[node]) {
                    int newMask = mask | (1 << neighbor);
                    if (!visited[neighbor][newMask]) {
                        visited[neighbor][newMask] = true;
                        queue.offer(new int[] { neighbor, newMask, cost + 1 });
                    }
                }
            }
            steps++;
        }

        return -1; // Return -1 if no path exists (this should not occur for connected graphs).
    }
}
