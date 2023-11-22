from typing import List

class Solution:
    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:
        n = len(nums)
        temp = []

        for i in range(n):
            m = len(nums[i])
            for j in range(m):
                ti = i + j

                if len(temp) <= ti:
                    temp.append([])
                temp[ti].insert(0, nums[i][j])

        result = []
        for row in temp:
            result.extend(row)

        return result
