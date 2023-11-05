class Solution {
    public int getWinner(int[] arr, int k) {
        int current = arr[0];
        int winCount = 0;

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > current) {
                current = arr[i];
                winCount = 1;
            } else {
                winCount++;
            }

            if (winCount == k) {
                return current;
            }
        }

        if (k > arr.length) {
            int max = Integer.MIN_VALUE;
            for (int num : arr) {
                max = Math.max(max, num);
            }
            return max;
        }

        return current;
    }
}
