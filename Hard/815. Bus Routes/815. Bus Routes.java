import java.util.*;

public class Solution {
    public int numBusesToDestination(int[][] routes, int source, int target) {
        if (source == target) {
            return 0;
        }

        Map<Integer, List<Integer>> stopToRoutes = new HashMap<>();
        Set<Integer> visitedRoutes = new HashSet<>();

        for (int i = 0; i < routes.length; i++) {
            for (int stop : routes[i]) {
                stopToRoutes.computeIfAbsent(stop, k -> new ArrayList<>()).add(i);
            }
        }

        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{source, 0});

        while (!queue.isEmpty()) {
            int[] currentStopAndSteps = queue.poll();
            int currentStop = currentStopAndSteps[0];
            int steps = currentStopAndSteps[1];

            for (int routeIndex : stopToRoutes.getOrDefault(currentStop, Collections.emptyList())) {
                if (visitedRoutes.contains(routeIndex)) {
                    continue;
                }

                visitedRoutes.add(routeIndex);

                for (int nextStop : routes[routeIndex]) {
                    if (nextStop == target) {
                        return steps + 1;
                    }

                    queue.offer(new int[]{nextStop, steps + 1});
                }
            }
        }

        return -1;
    }
}
