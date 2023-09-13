class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        if (n <= 1) {
            return n;
        }

        // Initialize an array to store the number of candies for each child.
        int[] candies = new int[n];
        Arrays.fill(candies, 1);

        // First pass: Traverse from left to right.
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }

        // Second pass: Traverse from right to left and update candies if needed.
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            }
        }

        // Calculate the total number of candies needed.
        int totalCandies = 0;
        for (int candy : candies) {
            totalCandies += candy;
        }

        return totalCandies;
    }
}
