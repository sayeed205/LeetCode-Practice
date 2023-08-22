import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Solution {
    public int getKth(int lo, int hi, int k) {
        List<int[]> nums = new ArrayList<>();
        
        for (int i = lo; i <= hi; i++) {
            nums.add(new int[]{i, calculatePower(i)});
        }
        
        Collections.sort(nums, new Comparator<int[]>() {
            @Override
            public int compare(int[] a, int[] b) {
                if (a[1] != b[1]) {
                    return Integer.compare(a[1], b[1]);
                } else {
                    return Integer.compare(a[0], b[0]);
                }
            }
        });
        
        return nums.get(k - 1)[0];
    }
    
    private int calculatePower(int x) {
        int steps = 0;
        while (x != 1) {
            if (x % 2 == 0) {
                x /= 2;
            } else {
                x = 3 * x + 1;
            }
            steps++;
        }
        return steps;
    }
}
