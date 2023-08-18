class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        city_counts = [0] * n
        is_connected = [[False] * n for _ in range(n)]

        for road in roads:
            city1, city2 = road
            city_counts[city1] += 1
            city_counts[city2] += 1
            is_connected[city1][city2] = True
            is_connected[city2][city1] = True

        max_rank = 0
        for i in range(n):
            for j in range(i + 1, n):
                rank = city_counts[i] + city_counts[j]
                if is_connected[i][j]:
                    rank -= 1  # Subtract one if the cities are directly connected by a road
                max_rank = max(max_rank, rank)

        return max_rank
