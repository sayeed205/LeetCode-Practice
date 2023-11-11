use std::collections::{HashMap, BinaryHeap};
use std::cmp::Reverse;

struct Graph {
    nodes: i32,
    edges: HashMap<i32, Vec<(i32, i32)>>,
}

impl Graph {
    fn new(n: i32, edges: Vec<Vec<i32>>) -> Self {
        let mut graph = HashMap::new();
        for edge in edges {
            let (from, to, cost) = (edge[0], edge[1], edge[2]);
            graph.entry(from).or_insert(vec![]).push((to, cost));
        }
        Graph { nodes: n, edges: graph }
    }

    fn add_edge(&mut self, edge: Vec<i32>) {
        let (from, to, cost) = (edge[0], edge[1], edge[2]);
        self.edges.entry(from).or_insert(vec![]).push((to, cost));
    }

    fn shortest_path(&self, node1: i32, node2: i32) -> i32 {
        let mut distances = HashMap::new();
        let mut pq = BinaryHeap::new();

        distances.insert(node1, 0);
        pq.push(Reverse((0, node1)));

        while let Some(Reverse((cost, current))) = pq.pop() {
            if current == node2 {
                return cost;
            }

            if let Some(neighbors) = self.edges.get(&current) {
                for &(neighbor, edge_cost) in neighbors {
                    let new_cost = cost + edge_cost;
                    if !distances.contains_key(&neighbor) || new_cost < *distances.get(&neighbor).unwrap() {
                        distances.insert(neighbor, new_cost);
                        pq.push(Reverse((new_cost, neighbor)));
                    }
                }
            }
        }

        -1 // If no path is found
    }
}
