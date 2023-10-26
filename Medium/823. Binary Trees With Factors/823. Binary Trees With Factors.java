import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int numFactoredBinaryTrees(int[] arr) {
        final int MOD = 1_000_000_007;
        int n = arr.length;
        long[] dp = new long[n];
        
        Arrays.sort(arr);
        Map<Integer, Integer> index = new HashMap<>();
        for (int i = 0; i < n; i++) {
            index.put(arr[i], i);
        }
        
        Arrays.fill(dp, 1);
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[i] % arr[j] == 0) {
                    int factor = arr[i] / arr[j];
                    if (index.containsKey(factor)) {
                        int k = index.get(factor);
                        dp[i] = (dp[i] + dp[j] * dp[k]) % MOD;
                    }
                }
            }
        }
        
        long result = 0;
        for (long count : dp) {
            result = (result + count) % MOD;
        }
        
        return (int) result;
    }
}
