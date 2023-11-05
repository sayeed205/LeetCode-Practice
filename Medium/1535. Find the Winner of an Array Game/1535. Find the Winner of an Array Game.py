from typing import List


class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        current = arr[0]
        win_count = 0

        for i in range(1, len(arr)):
            if arr[i] > current:
                current = arr[i]
                win_count = 1
            else:
                win_count += 1

            if win_count == k:
                return current

        if k > len(arr):
            return max(arr)

        return current
