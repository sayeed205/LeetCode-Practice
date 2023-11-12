from collections import defaultdict, deque
from typing import List

class Solution:
    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
        if source == target:
            return 0

        stop_to_routes = defaultdict(list)

        for i, route in enumerate(routes):
            for stop in route:
                stop_to_routes[stop].append(i)

        visited_routes = set()
        queue = deque([(source, 0)])

        while queue:
            current_stop, steps = queue.popleft()

            for route_index in stop_to_routes[current_stop]:
                if route_index in visited_routes:
                    continue

                visited_routes.add(route_index)

                for next_stop in routes[route_index]:
                    if next_stop == target:
                        return steps + 1

                    queue.append((next_stop, steps + 1))

        return -1
