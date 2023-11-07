impl Solution {
    pub fn eliminate_maximum(dist: Vec<i32>, speed: Vec<i32>) -> i32 {
        let n = dist.len();
        let mut time_to_reach = vec![0; n];

        for i in 0..n {
            time_to_reach[i] = (dist[i] + speed[i] - 1) / speed[i];
        }

        time_to_reach.sort();

        let mut eliminated = 0;
        let mut time = 0;

        for i in 0..n {
            if time_to_reach[i] > time {
                eliminated += 1;
                time += 1;
            } else {
                break;
            }
        }

        eliminated
    }
}
