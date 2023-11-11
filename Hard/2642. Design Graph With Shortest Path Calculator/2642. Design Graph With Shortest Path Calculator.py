from typing import List

class Graph:

    def __init__(self, n: int, edges: List[List[int]]):
        self.n = n
        self.graph = {}
        for edge in edges:
            self.addEdge(edge)

    def addEdge(self, edge: List[int]) -> None:
        from_node, to_node, edge_cost = edge
        if from_node not in self.graph:
            self.graph[from_node] = []
        self.graph[from_node].append((to_node, edge_cost))

    def shortestPath(self, node1: int, node2: int) -> int:
        if node1 == node2:
            return 0

        min_times = [float('inf')] * self.n
        min_times[node1] = 0

        visited = set()

        while len(visited) != self.n:
            source, min_time_to_source = self.get_source_with_min_time(min_times, visited)

            if min_time_to_source == float('inf'):
                return min_times[node2] if min_times[node2] != float('inf') else -1

            visited.add(source)

            for target, time_to_target in self.graph.get(source, []):
                if target in visited:
                    continue

                new_time_to_target = min_time_to_source + time_to_target
                current_time_to_target = min_times[target]

                if new_time_to_target < current_time_to_target:
                    min_times[target] = new_time_to_target

        return min_times[node2] if min_times[node2] != float('inf') else -1

    def get_source_with_min_time(self, min_times, visited):
        source = -1
        min_time = float('inf')

        for to, edge_cost in enumerate(min_times):
            if to in visited:
                continue

            if edge_cost < min_time:
                min_time = edge_cost
                source = to

        return source, min_time
