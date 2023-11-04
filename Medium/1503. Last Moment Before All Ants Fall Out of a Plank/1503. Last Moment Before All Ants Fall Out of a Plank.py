from typing import List


class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
        left_time = max(left) if left else 0
        right_time = max(n - position for position in right) if right else 0
        return max(left_time, right_time)
