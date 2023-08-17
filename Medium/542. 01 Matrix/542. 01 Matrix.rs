use std::collections::VecDeque;

static DIR: [(i32, i32); 4] = [(0, 1), (1, 0), (0, -1), (-1, 0)];

impl Solution {
    pub fn update_matrix(mat: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let m = mat.len();
        let n = mat[0].len();
        let mut result = vec![vec![0; n]; m];
        let mut q = VecDeque::new();

        for r in 0..m {
            for c in 0..n {
                if mat[r][c] == 0 {
                    q.push_back((r, c));
                } else {
                    result[r][c] = -1; // Marked as not processed yet!
                }
            }
        }

        while let Some(curr) = q.pop_front() {
            let r = curr.0;
            let c = curr.1;

            for i in 0..4 {
                let nr = r as i32 + DIR[i].0;
                let nc = c as i32 + DIR[i].1;

                if nr >= 0 && nr < m as i32 && nc >= 0 && nc < n as i32 && result[nr as usize][nc as usize] == -1 {
                    result[nr as usize][nc as usize] = result[r][c] + 1;
                    q.push_back((nr as usize, nc as usize));
                }
            }
        }

        result
    }
}
