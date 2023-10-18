use std::collections::HashMap;
use std::collections::VecDeque;

impl Solution {
    pub fn minimum_time(n: i32, relations: Vec<Vec<i32>>, time: Vec<i32>) -> i32 {
        let mut graph: HashMap<i32, Vec<i32>> = HashMap::new();
        let mut in_degree = vec![0; (n + 1) as usize];
        for relation in &relations {
            graph
                .entry(relation[0])
                .or_insert(Vec::new())
                .push(relation[1]);
            in_degree[relation[1] as usize] += 1;
        }

        let mut dist: Vec<i32> = vec![0];
        dist.extend(&time);
        let mut queue: VecDeque<i32> = VecDeque::new();
        for i in 1..=n {
            if in_degree[i as usize] == 0 {
                queue.push_back(i);
            }
        }

        while let Some(course) = queue.pop_front() {
            if let Some(neighbors) = graph.get(&course) {
                for &next_course in neighbors {
                    dist[next_course as usize] = std::cmp::max(
                        dist[next_course as usize],
                        dist[course as usize] + time[(next_course - 1) as usize],
                    );
                    in_degree[next_course as usize] -= 1;
                    if in_degree[next_course as usize] == 0 {
                        queue.push_back(next_course);
                    }
                }
            }
        }

        *dist.iter().max().unwrap()
    }
}
