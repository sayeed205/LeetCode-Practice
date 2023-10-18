from typing import List


class Solution:
    def minimumTime(
        self, n: int, relations: List[List[int]], time: List[int]
    ) -> int:
        map = {}
        for prev, next in relations:
            if next in map:
                map[next].append(prev)
            else:
                map[next] = [prev]

        max_time = 0
        memo = [-1] * (n + 1)

        def dfs(node):
            if node not in map:
                return time[node - 1]
            if memo[node] != -1:
                return memo[node]

            inner_max = -1
            prerequisites = map[node]
            for course in prerequisites:
                inner_max = max(inner_max, time[node - 1] + dfs(course))

            memo[node] = inner_max
            return inner_max

        for i in range(1, n + 1):
            if memo[i] == -1:
                max_time = max(max_time, dfs(i))

        return max_time
