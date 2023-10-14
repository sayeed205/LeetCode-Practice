pub struct DP {
    vec: Vec<(usize, usize)>,
    n: usize,
    m: usize,

    memo: Vec<Vec<Option<Option<usize>>>>,
}

impl DP {
    pub fn new(vec: Vec<(usize, usize)>) -> Self {
        let n = vec.len();
        let m = n * 2;

        let memo = vec![vec![None; m + 1]; n + 1];

        Self { vec, n, m, memo }
    }
}

impl DP {
    pub fn solve(&mut self, i: usize, j: usize) -> Option<usize> {
        if i > self.n {
            return None;
        }
        if j > self.m {
            return None;
        }

        if let Some(ret) = self.memo[i][j] {
            return ret; // cached
        }

        let ret = self.solve_inner(i, j);
        self.memo[i][j] = Some(ret);
        ret
    }

    fn solve_inner(&mut self, i: usize, j: usize) -> Option<usize> {
        if i >= self.n {
            if j < self.n {
                return None;
            } // negative
            return Some(usize::MIN);
        } // no wall

        if i + j >= self.n * 2 {
            return Some(usize::MIN);
        } // definitely enough

        let (t, weight) = self.vec[i];

        let mut ret = None;
        {
            // take current wall
            let j_next = (j + t).min(self.m);
            if let Some(_ret) = self.solve(i + 1, j_next) {
                ret = Some(ret.unwrap_or(usize::MAX).min(_ret + weight));
            }
        }
        {
            // skip current wall
            if let Some(_ret) = self.solve(i + 1, j - 1) {
                ret = Some(ret.unwrap_or(usize::MAX).min(_ret));
            }
        }

        ret
    }
}

impl Solution {
    pub fn paint_walls(cost: Vec<i32>, time: Vec<i32>) -> i32 {
        // Why are we even using the paid painter??
        // Just hire the free painter, they are better at the job.

        let vec = time
            .into_iter()
            .zip(cost.into_iter())
            .map(|(e0, e1)| (e0 as usize, e1 as usize))
            .collect::<Vec<_>>();
        let n = vec.len();

        let mut dp = DP::new(vec);
        dp.solve(usize::MIN, n).unwrap() as i32
    }
}
