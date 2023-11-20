from typing import List

class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        acc = 0
        # Calculate cumulative travel times
        travel_accumulated = [0] + [acc := acc + t for t in travel]
        
        # Use a loop to iterate through the garbage list and accumulate counts and last indices
        p, m, g, last_p, last_m, last_g = 0, 0, 0, 0, 0, 0
        for i, s in enumerate(garbage):
            for char in s:
                if char == 'P':
                    p += 1
                    last_p = i
                elif char == 'M':
                    m += 1
                    last_m = i
                elif char == 'G':
                    g += 1
                    last_g = i
        
        # Calculate total time
        return p + m + g + travel_accumulated[last_p] + travel_accumulated[last_m] + travel_accumulated[last_g]
