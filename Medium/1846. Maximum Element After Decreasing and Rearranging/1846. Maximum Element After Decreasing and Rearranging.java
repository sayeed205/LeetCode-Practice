import java.util.Arrays;

public class Solution {
    public int maximumElementAfterDecrementingAndRearranging(int[] arr) {
        Arrays.sort(arr);  // Step 1

        int prev = 0;
        for (int i = 0; i < arr.length; i++) {
            arr[i] = Math.min(prev + 1, arr[i]);  // Step 2
            prev = arr[i];
        }

        int max = 0;
        for (int num : arr) {
            max = Math.max(max, num);
        }

        return max;  // Step 3
    }
}
