class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int n = cost.length;
        if (n == 2) {
            return Math.min(cost[0], cost[1]);
        }
        
        int prev1 = cost[0];
        int prev2 = cost[1];
        
        for (int i = 2; i < n; i++) {
            int current = cost[i] + Math.min(prev1, prev2);
            prev1 = prev2;
            prev2 = current;
        }
        
        return Math.min(prev1, prev2);
    }
}
