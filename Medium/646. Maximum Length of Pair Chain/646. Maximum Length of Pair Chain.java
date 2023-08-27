import java.util.Arrays;

class Solution {
    public int findLongestChain(int[][] pairs) {
        int n = pairs.length;
        Arrays.sort(pairs, (a, b) -> Integer.compare(a[0], b[0])); // Sort in increasing order by starting point
        
        int ans = 1;
        int lastEnd = pairs[0][1];
        
        for (int i = 1; i < n; i++) {
            int start = pairs[i][0];
            int end = pairs[i][1];
            
            if (start > lastEnd) {
                ans++;
                lastEnd = end;
            } else {
                lastEnd = Math.min(lastEnd, end);
            }
        }
        
        return ans;
    }
}
