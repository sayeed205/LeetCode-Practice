use std::collections::VecDeque;

impl Solution {
    pub fn shortest_path_length(graph: Vec<Vec<i32>>) -> i32 {
        let n = graph.len();
        let target_mask = (1 << n) - 1;
        let mut queue = VecDeque::new();
        let mut visited = vec![vec![false; 1 << n]; n]; // DP table to store visited states
        for i in 0..n {
            queue.push_back((i, 1 << i, 0)); // Initialize the queue with starting nodes
            visited[i][1 << i] = true;
        }
        let mut steps = 0;

        while !queue.is_empty() {
            let level_size = queue.len();
            for _ in 0..level_size {
                let (node, mask, cost) = queue.pop_front().unwrap();
                if mask == target_mask {
                    return cost;
                }
                for &neighbor in &graph[node] {
                    let new_mask = mask | (1 << neighbor);
                    if !visited[neighbor as usize][new_mask] {
                        visited[neighbor as usize][new_mask] = true;
                        queue.push_back((neighbor as usize, new_mask, cost + 1));
                    }
                }
            }
            steps += 1;
        }

        -1 // Return -1 if no path exists (this should not occur for connected graphs).
    }
}
