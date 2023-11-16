from typing import List

class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        result = ''

        for i in range(len(nums)):
            # If the current character at position i is '0', append '1'; otherwise, append '0'.
            result += '1' if nums[i][i] == '0' else '0'

        return result
