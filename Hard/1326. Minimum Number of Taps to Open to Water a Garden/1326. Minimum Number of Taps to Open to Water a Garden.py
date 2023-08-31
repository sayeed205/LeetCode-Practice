class Solution:
    def minTaps(self, n: int, ranges: List[int]) -> int:
        coverage = [0] * (n + 1)

        # Update coverage list based on tap ranges
        for i in range(len(ranges)):
            if ranges[i] == 0:
                continue
            left = max(0, i - ranges[i])
            coverage[left] = max(coverage[left], i + ranges[i])

        end = 0
        farthest_can_reach = 0
        tap_count = 0

        # Traverse the garden and calculate required taps
        for i in range(n + 1):
            if i > end:
                if farthest_can_reach <= end:
                    return -1
                end = farthest_can_reach
                tap_count += 1
            farthest_can_reach = max(farthest_can_reach, coverage[i])

        # Return the total taps required, considering the endpoint
        return tap_count + (1 if end < n else 0)
