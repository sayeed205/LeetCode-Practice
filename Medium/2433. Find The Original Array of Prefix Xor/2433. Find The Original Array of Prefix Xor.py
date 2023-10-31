from typing import List


class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        n = len(pref)
        arr = [0] * n

        for i in range(n):
            if i == 0:
                arr[i] = pref[i]
            else:
                arr[i] = pref[i] ^ pref[i - 1]

        return arr
