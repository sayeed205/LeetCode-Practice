class Solution:
    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:
        adjacency_map = {}

        # Build the adjacency map
        for pair in adjacentPairs:
            adjacency_map.setdefault(pair[0], []).append(pair[1])
            adjacency_map.setdefault(pair[1], []).append(pair[0])

        n = len(adjacentPairs) + 1
        result = [0] * n
        visited = set()

        # Find the starting point
        for key, value in adjacency_map.items():
            if len(value) == 1:
                start = key
                break

        # Reconstruct the array
        result[0] = start
        result[1] = adjacency_map[start][0]

        visited.add(start)
        visited.add(result[1])

        for i in range(2, n):
            neighbors = adjacency_map[result[i - 1]]
            result[i] = neighbors[0] if neighbors[0] != result[i - 2] else neighbors[1]

            visited.add(result[i])

        return result
