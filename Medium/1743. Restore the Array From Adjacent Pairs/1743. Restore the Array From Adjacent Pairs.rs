use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn restore_array(adjacent_pairs: Vec<Vec<i32>>) -> Vec<i32> {
        let mut adjacency_map: HashMap<i32, Vec<i32>> = HashMap::new();

        // Build the adjacency map
        for pair in &adjacent_pairs {
            adjacency_map
                .entry(pair[0])
                .or_insert(Vec::new())
                .push(pair[1]);
            adjacency_map
                .entry(pair[1])
                .or_insert(Vec::new())
                .push(pair[0]);
        }

        let n = adjacent_pairs.len() + 1;
        let mut result: Vec<i32> = vec![0; n];
        let mut visited: HashSet<i32> = HashSet::new();

        // Find the starting point
        let mut start = 0;
        for (key, value) in &adjacency_map {
            if value.len() == 1 {
                start = *key;
                break;
            }
        }

        // Reconstruct the array using the logic from Java code
        result[0] = start;
        result[1] = adjacency_map[&start][0];

        visited.insert(start);
        visited.insert(result[1]);

        for i in 2..n {
            let neighbors = &adjacency_map[&result[i - 1]];
            result[i] = if neighbors[0] == result[i - 2] {
                neighbors[1]
            } else {
                neighbors[0]
            };

            visited.insert(result[i]);
        }

        result
    }
}
