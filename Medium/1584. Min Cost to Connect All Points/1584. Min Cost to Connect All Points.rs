use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn min_cost_connect_points(points: Vec<Vec<i32>>) -> i32 {
        let n = points.len();
        let mut visited = vec![false; n];
        let mut min_costs = vec![i32::MAX; n];
        min_costs[0] = 0;
        let mut min_cost = 0;
        let mut min_heap = BinaryHeap::new();

        // Start from the first point
        min_heap.push(Reverse((0, 0))); // (cost, point_index)

        while let Some(Reverse((cost, u))) = min_heap.pop() {
            if visited[u] {
                continue;
            }
            visited[u] = true;
            min_cost += cost;

            for v in 0..n {
                if !visited[v] {
                    let edge_cost =
                        (points[u][0] - points[v][0]).abs() + (points[u][1] - points[v][1]).abs();
                    if edge_cost < min_costs[v] {
                        min_costs[v] = edge_cost;
                        min_heap.push(Reverse((edge_cost, v)));
                    }
                }
            }
        }

        min_cost
    }
}
