import heapq


class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        visited = [False] * n
        min_costs = [float("inf")] * n
        min_costs[0] = 0
        min_cost = 0

        def manhattan_distance(point1, point2):
            return abs(point1[0] - point2[0]) + abs(point1[1] - point2[1])

        min_heap = [(0, 0)]  # (cost, point_index)

        while min_heap:
            cost, u = heapq.heappop(min_heap)
            if visited[u]:
                continue
            visited[u] = True
            min_cost += cost

            for v in range(n):
                if not visited[v]:
                    edge_cost = manhattan_distance(points[u], points[v])
                    if edge_cost < min_costs[v]:
                        min_costs[v] = edge_cost
                        heapq.heappush(min_heap, (edge_cost, v))

        return min_cost
