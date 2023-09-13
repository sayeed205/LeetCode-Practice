impl Solution {
    pub fn candy(ratings: Vec<i32>) -> i32 {
        let n = ratings.len();
        if n <= 1 {
            return n as i32;
        }

        // Initialize an array to store the number of candies for each child.
        let mut candies = vec![1; n];

        // First pass: Traverse from left to right.
        for i in 1..n {
            if ratings[i] > ratings[i - 1] {
                candies[i] = candies[i - 1] + 1;
            }
        }

        // Second pass: Traverse from right to left and update candies if needed.
        for i in (0..n - 1).rev() {
            if ratings[i] > ratings[i + 1] {
                candies[i] = candies[i].max(candies[i + 1] + 1);
            }
        }

        // Calculate the total number of candies needed.
        let total_candies: i32 = candies.iter().sum();

        total_candies
    }
}
