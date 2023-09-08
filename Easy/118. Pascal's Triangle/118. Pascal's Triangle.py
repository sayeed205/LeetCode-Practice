class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []

        for i in range(numRows):
            row = []

            for j in range(i + 1):
                if j == 0 or j == i:
                    row.append(1)
                else:
                    # Calculate the value using the formula: C(n, k) = C(n-1, k-1) + C(n-1, k)
                    value = result[i - 1][j - 1] + result[i - 1][j]
                    row.append(value)

            result.append(row)

        return result
