class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        int[] result = new int[k];
        int m = mat.length;
        int n = mat[0].length;
        int[] strengths = new int[m];

        // Calculate the strength of each row
        for (int i = 0; i < m; i++) {
            int strength = 0;
            for (int j = 0; j < n; j++) {
                strength += mat[i][j];
            }
            strengths[i] = strength * 1000 + i; // Use a multiplier to preserve original index
        }

        // Sort the rows by strength and index in case of a tie
        Arrays.sort(strengths);

        // Extract the indices of the k weakest rows
        for (int i = 0; i < k; i++) {
            result[i] = strengths[i] % 1000; // Retrieve the original index
        }

        return result;
    }
}
