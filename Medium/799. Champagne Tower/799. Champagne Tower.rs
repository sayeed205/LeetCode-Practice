impl Solution {
    pub fn champagne_tower(poured: i32, query_row: i32, query_glass: i32) -> f64 {
        // Create a 1D vector to represent the champagne in each glass
        let mut tower: Vec<f64> = vec![0.0; 101];
        tower[0] = poured as f64;

        // Iterate through each row and glass to distribute champagne
        for i in 1..=query_row as usize {
            let mut next_tower: Vec<f64> = vec![0.0; 101];
            for j in 0..=i {
                // Calculate the excess champagne that flows to the glasses below
                let excess = (tower[j] - 1.0) / 2.0;
                if excess > 0.0 {
                    // Distribute excess champagne to the glasses below and to the right
                    next_tower[j] += excess;
                    next_tower[j + 1] += excess;
                }
            }
            tower = next_tower;
        }

        // Ensure the value in the specified glass is between 0 and 1
        let result = tower[query_glass as usize].min(1.0);

        result
    }
}
