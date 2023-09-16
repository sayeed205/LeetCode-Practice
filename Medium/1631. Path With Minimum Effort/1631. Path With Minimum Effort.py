import heapq


class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        rows = len(heights)
        columns = len(heights[0])
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # Right, Down, Left, Up

        # Helper function to check if a cell is within bounds
        def isInside(row, col):
            return 0 <= row < rows and 0 <= col < columns

        # Initialize distances with Infinity
        distances = [[float("inf")] * columns for _ in range(rows)]
        distances[0][0] = 0  # Start from (0, 0)

        # Priority queue to store cells with their efforts
        queue = [(0, 0, 0)]  # (effort, row, col)

        while queue:
            effort, row, col = heapq.heappop(queue)

            if row == rows - 1 and col == columns - 1:
                return effort  # Reached the bottom-right cell

            for dr, dc in directions:
                newRow, newCol = row + dr, col + dc

                if isInside(newRow, newCol):
                    newEffort = max(
                        effort, abs(heights[row][col] - heights[newRow][newCol])
                    )

                    if newEffort < distances[newRow][newCol]:
                        distances[newRow][newCol] = newEffort
                        heapq.heappush(queue, (newEffort, newRow, newCol))

        return -1  # No path found (should not happen in this problem)
