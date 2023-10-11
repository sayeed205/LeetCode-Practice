from typing import List


class Solution:
    def fullBloomFlowers(
        self, flowers: List[List[int]], people: List[int]
    ) -> List[int]:
        def search(arr, target):
            low = 0
            high = len(arr)
            while low < high:
                mid = (low + high) // 2
                if arr[mid] > target:
                    high = mid
                else:
                    low = mid + 1
            return low

        starts = [flower[0] for flower in flowers]
        ends = [flower[1] + 1 for flower in flowers]
        starts.sort()
        ends.sort()

        result = [search(starts, t) - search(ends, t) for t in people]

        return result
