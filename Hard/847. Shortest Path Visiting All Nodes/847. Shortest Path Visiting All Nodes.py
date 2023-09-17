from collections import deque


class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        n = len(graph)
        target_mask = (1 << n) - 1
        queue = deque()
        visited = [
            [False] * (1 << n) for _ in range(n)
        ]  # DP table to store visited states

        for i in range(n):
            queue.append(
                (i, 1 << i, 0)
            )  # Initialize the queue with starting nodes
            visited[i][1 << i] = True

        steps = 0

        while queue:
            level_size = len(queue)
            for _ in range(level_size):
                node, mask, cost = queue.popleft()
                if mask == target_mask:
                    return cost
                for neighbor in graph[node]:
                    new_mask = mask | (1 << neighbor)
                    if not visited[neighbor][new_mask]:
                        visited[neighbor][new_mask] = True
                        queue.append((neighbor, new_mask, cost + 1))

            steps += 1

        return (
            -1
        )  # Return -1 if no path exists (this should not occur for connected graphs)
