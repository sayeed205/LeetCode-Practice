class Solution {
    public int minTaps(int n, int[] ranges) {
        int[] coverage = new int[n + 1];

        // Update coverage array based on tap ranges
        for (int i = 0; i < ranges.length; i++) {
            if (ranges[i] == 0) {
                continue;
            }
            int left = Math.max(0, i - ranges[i]);
            coverage[left] = Math.max(coverage[left], i + ranges[i]);
        }

        int end = 0, farthestCanReach = 0, tapCount = 0;

        // Traverse the garden and calculate required taps
        for (int i = 0; i <= n; i++) {
            if (i > end) {
                if (farthestCanReach <= end) {
                    return -1;
                }
                end = farthestCanReach;
                tapCount++;
            }
            farthestCanReach = Math.max(farthestCanReach, coverage[i]);
        }

        // Return the total taps required, considering the endpoint
        return tapCount + (end < n ? 1 : 0);
    }
}
