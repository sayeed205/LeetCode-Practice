from typing import List

class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        arr.sort()  # Step 1

        prev = 0
        for i in range(len(arr)):
            arr[i] = min(prev + 1, arr[i])  # Step 2
            prev = arr[i]

        return max(arr)  # Step 3
