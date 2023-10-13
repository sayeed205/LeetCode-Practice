impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        let n = cost.len();
        if n == 2 {
            return cost[0].min(cost[1]);
        }

        let mut prev1 = cost[0];
        let mut prev2 = cost[1];

        for i in 2..n {
            let current = cost[i] + prev1.min(prev2);
            prev1 = prev2;
            prev2 = current;
        }

        prev1.min(prev2)
    }
}
