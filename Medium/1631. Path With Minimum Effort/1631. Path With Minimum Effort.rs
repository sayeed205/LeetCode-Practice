use std::collections::BinaryHeap;
use std::collections::HashSet;

impl Solution {
    pub fn minimum_effort_path(heights: Vec<Vec<i32>>) -> i32 {
        let rows = heights.len();
        let cols = heights[0].len();
        let mut min_effort = 0;
        let mut left = 0;
        let mut right = 10i32.pow(6);

        while left < right {
            let mid = left + (right - left) / 2;
            let mut visited = vec![vec![false; cols]; rows];

            if Self::dfs(&heights, &mut visited, 0, 0, mid, rows, cols) {
                min_effort = mid;
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        min_effort
    }

    fn dfs(
        heights: &Vec<Vec<i32>>,
        visited: &mut Vec<Vec<bool>>,
        x: usize,
        y: usize,
        mid: i32,
        rows: usize,
        cols: usize,
    ) -> bool {
        if x == rows - 1 && y == cols - 1 {
            return true;
        }

        visited[x][y] = true;

        let dx = [-1, 0, 1, 0];
        let dy = [0, 1, 0, -1];

        for k in 0..4 {
            let new_x = x as i32 + dx[k];
            let new_y = y as i32 + dy[k];

            if new_x >= 0
                && new_x < rows as i32
                && new_y >= 0
                && new_y < cols as i32
                && !visited[new_x as usize][new_y as usize]
            {
                let diff = (heights[new_x as usize][new_y as usize] - heights[x][y]).abs();

                if diff <= mid
                    && Self::dfs(
                        heights,
                        visited,
                        new_x as usize,
                        new_y as usize,
                        mid,
                        rows,
                        cols,
                    )
                {
                    return true;
                }
            }
        }

        false
    }
}
