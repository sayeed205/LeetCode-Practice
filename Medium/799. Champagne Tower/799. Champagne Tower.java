class Solution {
    public double champagneTower(int poured, int query_row, int query_glass) {
        // Create a 2D array to represent the champagne in each glass
        double[][] tower = new double[101][101];
        
        // Pour the initial amount of champagne into the top glass
        tower[0][0] = (double) poured;

        // Iterate through each row and glass to distribute champagne
        for (int i = 0; i <= query_row; i++) {
            for (int j = 0; j <= i; j++) {
                // Calculate the excess champagne that flows to the glasses below
                double excess = (tower[i][j] - 1.0) / 2.0;
                if (excess > 0) {
                    // Distribute excess champagne to the glasses below and to the right
                    tower[i + 1][j] += excess;
                    tower[i + 1][j + 1] += excess;
                }
            }
        }

        // Ensure the value in the specified glass is between 0 and 1
        double result = Math.min(1.0, tower[query_row][query_glass]);

        return result;
    }
}
