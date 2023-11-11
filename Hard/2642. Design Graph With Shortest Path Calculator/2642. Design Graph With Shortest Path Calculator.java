import java.util.*;

public class Graph {

    private int n;
    private Map<Integer, List<int[]>> graph;

    public Graph(int n, int[][] edges) {
        this.n = n;
        this.graph = new HashMap<>();

        for (int[] edge : edges) {
            addEdge(edge);
        }
    }

    public void addEdge(int[] edge) {
        int from = edge[0];
        int to = edge[1];
        int edgeCost = edge[2];

        if (!graph.containsKey(from)) {
            graph.put(from, new ArrayList<>());
        }

        graph.get(from).add(new int[]{to, edgeCost});
    }

    public int shortestPath(int node1, int node2) {
        if (node1 == node2) {
            return 0;
        }

        int[] minTimes = new int[n];
        Arrays.fill(minTimes, Integer.MAX_VALUE);
        minTimes[node1] = 0;

        Set<Integer> visited = new HashSet<>();

        while (visited.size() != n) {
            int[] sourceWithMinTime = getSourceWithMinTime(minTimes, visited);

            int source = sourceWithMinTime[0];
            int minTimeToSource = sourceWithMinTime[1];

            if (minTimeToSource == Integer.MAX_VALUE) {
                return minTimes[node2] == Integer.MAX_VALUE ? -1 : minTimes[node2];
            }

            visited.add(source);

            if (graph.containsKey(source)) {
                for (int[] neighbor : graph.get(source)) {
                    int target = neighbor[0];
                    int timeToTarget = neighbor[1];

                    if (visited.contains(target)) {
                        continue;
                    }

                    int newTimeToTarget = minTimeToSource + timeToTarget;
                    int currentTimeToTarget = minTimes[target];

                    if (newTimeToTarget < currentTimeToTarget) {
                        minTimes[target] = newTimeToTarget;
                    }
                }
            }
        }

        return minTimes[node2] == Integer.MAX_VALUE ? -1 : minTimes[node2];
    }

    private int[] getSourceWithMinTime(int[] minTimes, Set<Integer> visited) {
        int source = -1;
        int minTime = Integer.MAX_VALUE;

        for (int to = 0; to < minTimes.length; to++) {
            if (visited.contains(to)) {
                continue;
            }

            if (minTimes[to] < minTime) {
                minTime = minTimes[to];
                source = to;
            }
        }

        return new int[]{source, minTime};
    }
}
