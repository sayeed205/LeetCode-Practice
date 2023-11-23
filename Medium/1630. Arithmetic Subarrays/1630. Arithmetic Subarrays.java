import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Boolean> checkArithmeticSubarrays(int[] nums, int[] l, int[] r) {
        List<Boolean> result = new ArrayList<>();

        for (int i = 0; i < l.length; i++) {
            int start = l[i];
            int end = r[i];

            result.add(isArithmetic(nums, start, end));
        }

        return result;
    }

    private boolean isArithmetic(int[] nums, int start, int end) {
        int[] subarray = new int[end - start + 1];
        System.arraycopy(nums, start, subarray, 0, subarray.length);

        int[] cloned = subarray.clone();
        java.util.Arrays.sort(cloned);

        int diff = cloned[1] - cloned[0];

        for (int j = 1; j < cloned.length - 1; j++) {
            if (cloned[j + 1] - cloned[j] != diff) {
                return false;
            }
        }

        return true;
    }
}
