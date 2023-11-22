use std::collections::*;

impl Solution {
    pub fn find_diagonal_order(nums: Vec<Vec<i32>>) -> Vec<i32> {
        let n = nums.len();
        let mut temp = vec![];

        for i in 0..n {
            let m = nums[i].len();
            for j in 0..m {
                let ti = i + j;

                if temp.len() <= ti {
                    temp.push(VecDeque::new());
                }
                temp[ti].push_front(nums[i][j]);
            }
        }

        let mut result = vec![];
        for que in &temp {
            for &v in que {
                result.push(v);
            }
        }
        result
    }
}
