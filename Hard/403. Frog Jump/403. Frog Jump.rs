use std::collections::HashMap;

impl Solution {
    pub fn can_cross(stones: Vec<i32>) -> bool {
        let n = stones.len();

        // Create a hashmap to store the positions of stones for faster lookups.
        let stone_positions: HashMap<i32, usize> = stones
            .iter()
            .enumerate()
            .map(|(i, &stone)| (stone, i))
            .collect();

        // A 2D dp array to store whether it's possible to reach a stone with a certain jump size.
        let mut dp = vec![vec![false; n]; n];
        dp[0][0] = true; // The first stone is reachable with a jump size of 0.

        for i in 1..n {
            for j in 0..i {
                let jump = stones[i] - stones[j];
                if jump <= j as i32 + 1 {
                    // Check if the previous stone (j) was reachable with a jump size of jump - 1, jump, or jump + 1.
                    if dp[j][jump as usize - 1] || dp[j][jump as usize] || dp[j][jump as usize + 1]
                    {
                        dp[i][jump as usize] = true;
                        if i == n - 1 {
                            return true; // If we can reach the last stone, return true.
                        }
                    }
                }
            }
        }

        false // If the last stone is not reachable, return false.
    }
}
