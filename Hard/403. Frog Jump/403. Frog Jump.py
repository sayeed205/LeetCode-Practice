class Solution:
    def canCross(self, stones: List[int]) -> bool:
        if stones[1] != 1:
            return False  # The first position has to be 1.

        # Hashmap which stores value and index pairs.
        indices = {v: i for i, v in enumerate(stones)}

        @cache
        def dfs(i, lastStep):
            if i == len(stones) - 1:
                # If we reach the last position, we are done and return True
                return True

            res = False
            # The 3 neighbor states discussed above
            for curStep in range(lastStep - 1, lastStep + 2):
                nextPosition = stones[i] + curStep
                if nextPosition in indices and indices[nextPosition] > i:
                    # Recurse to the next position
                    res = res or dfs(indices[nextPosition], curStep)
            return res

        return dfs(1, 1)
