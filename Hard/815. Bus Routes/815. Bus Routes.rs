use std::collections::{HashMap, HashSet, VecDeque};

impl Solution {
    pub fn num_buses_to_destination(routes: Vec<Vec<i32>>, source: i32, target: i32) -> i32 {
        if source == target {
            return 0;
        }

        let mut stop_to_routes: HashMap<i32, Vec<usize>> = HashMap::new();
        for (i, route) in routes.iter().enumerate() {
            for stop in route {
                stop_to_routes
                    .entry(*stop)
                    .or_insert_with(Vec::new)
                    .push(i);
            }
        }

        let mut visited_routes = HashSet::new();
        let mut queue = VecDeque::new();
        queue.push_back((source, 0));

        while !queue.is_empty() {
            let (current_stop, steps) = queue.pop_front().unwrap();

            for &route_index in stop_to_routes.get(&current_stop).unwrap_or(&Vec::new()) {
                if visited_routes.contains(&route_index) {
                    continue;
                }
                visited_routes.insert(route_index);

                for &next_stop in routes[route_index].iter() {
                    if next_stop == target {
                        return steps + 1;
                    }
                    queue.push_back((next_stop, steps + 1));
                }
            }
        }

        -1
    }
}
