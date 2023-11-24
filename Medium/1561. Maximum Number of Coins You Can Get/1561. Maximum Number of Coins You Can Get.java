import java.util.Arrays;

class Solution {
    public int maxCoins(int[] piles) {
        Arrays.sort(piles);

        int res = 0;
        int n = piles.length;

        for (int i = n / 3; i < n; i += 2) {
            res += piles[i];
        }

        return res;
    }
}
