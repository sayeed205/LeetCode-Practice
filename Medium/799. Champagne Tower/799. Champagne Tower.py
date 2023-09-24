class Solution:
    def champagneTower(
        self, poured: int, query_row: int, query_glass: int
    ) -> float:
        # Create a 2D list to represent the champagne in each glass
        tower = [[0.0] * 101 for _ in range(101)]

        # Pour the initial amount of champagne into the top glass
        tower[0][0] = poured

        # Iterate through each row and glass to distribute champagne
        for i in range(query_row + 1):
            for j in range(i + 1):
                # Calculate the excess champagne that flows to the glasses below
                excess = (tower[i][j] - 1.0) / 2.0
                if excess > 0:
                    # Distribute excess champagne to the glasses below and to the right
                    tower[i + 1][j] += excess
                    tower[i + 1][j + 1] += excess

        # Ensure the value in the specified glass is between 0 and 1
        result = min(1.0, tower[query_row][query_glass])

        return result
