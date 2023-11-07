from typing import List


class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        n = len(dist)
        time_to_reach = [0] * n

        for i in range(n):
            time_to_reach[i] = (dist[i] + speed[i] - 1) // speed[i]

        time_to_reach.sort()

        eliminated = 0
        time = 0

        for i in range(n):
            if time_to_reach[i] > time:
                eliminated += 1
                time += 1
            else:
                break

        return eliminated
