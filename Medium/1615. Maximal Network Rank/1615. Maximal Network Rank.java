class Solution {
    public int maximalNetworkRank(int n, int[][] roads) {
        int[] cityCounts = new int[n];
        boolean[][] isConnected = new boolean[n][n];
        
        for (int[] road : roads) {
            cityCounts[road[0]]++;
            cityCounts[road[1]]++;
            isConnected[road[0]][road[1]] = true;
            isConnected[road[1]][road[0]] = true;
        }
        
        int maxRank = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int rank = cityCounts[i] + cityCounts[j];
                if (isConnected[i][j]) {
                    rank--; // Subtract one if the cities are directly connected by a road
                }
                maxRank = Math.max(maxRank, rank);
            }
        }
        
        return maxRank;
    }
}
