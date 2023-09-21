class Solution {
    public int findKthNumber(int m, int n, int k) {
        int left = 1;
        int right = m * n;

        while (left < right) {
            int mid = left + (right - left) / 2;
            
            // Count the number of elements less than or equal to mid in the multiplication table
            int count = countElements(m, n, mid);
            
            if (count < k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    private int countElements(int m, int n, int target) {
        int count = 0;
        for (int i = 1; i <= m; i++) {
            count += Math.min(target / i, n);
        }
        return count;
    }
}
