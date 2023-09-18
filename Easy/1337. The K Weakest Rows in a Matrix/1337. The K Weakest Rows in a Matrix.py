class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        rows = []

        # Calculate the strength of each row and store it with the row index
        for i, row in enumerate(mat):
            strength = sum(row)
            rows.append((strength, i))

        # Sort the rows by strength and index in case of a tie
        rows.sort(key=lambda x: (x[0], x[1]))

        result = []

        # Extract the indices of the k weakest rows
        for i in range(k):
            result.append(rows[i][1])

        return result
