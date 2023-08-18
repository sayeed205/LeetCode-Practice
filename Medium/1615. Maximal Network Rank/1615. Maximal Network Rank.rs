impl Solution {
    pub fn maximal_network_rank(n: i32, roads: Vec<Vec<i32>>) -> i32 {
        let mut city_counts = vec![0; n as usize];
        let mut is_connected = vec![vec![false; n as usize]; n as usize];

        for road in &roads {
            let city1 = road[0] as usize;
            let city2 = road[1] as usize;
            city_counts[city1] += 1;
            city_counts[city2] += 1;
            is_connected[city1][city2] = true;
            is_connected[city2][city1] = true;
        }

        let mut max_rank = 0;
        for i in 0..n as usize {
            for j in (i + 1)..n as usize {
                let rank = city_counts[i] + city_counts[j];
                if is_connected[i][j] {
                    max_rank = max_rank.max(rank - 1); // Subtract one if the cities are directly connected by a road
                } else {
                    max_rank = max_rank.max(rank);
                }
            }
        }

        max_rank
    }
}
