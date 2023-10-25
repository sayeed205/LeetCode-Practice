class Solution {
    public int kthGrammar(int n, int k) {
        if (n == 1) {
            return 0;
        }
        
        // Calculate the midpoint of the previous row
        int mid = (int) Math.pow(2, n - 2);
        
        // If k is less than or equal to mid, it's the same as in the previous row.
        if (k <= mid) {
            return kthGrammar(n - 1, k);
        } else {
            // If k is greater than mid, it's the opposite of the symbol in the previous row.
            return 1 - kthGrammar(n - 1, k - mid);
        }
    }
}
