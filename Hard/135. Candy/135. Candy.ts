function candy(ratings: number[]): number {
    const n = ratings.length;
    if (n <= 1) {
        return n;
    }

    // Initialize an array to store the number of candies for each child.
    const candies: number[] = new Array(n).fill(1);

    // First pass: Traverse from left to right.
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Second pass: Traverse from right to left and update candies if needed.
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Calculate the total number of candies needed.
    const totalCandies: number = candies.reduce((sum, num) => sum + num, 0);

    return totalCandies;
}
