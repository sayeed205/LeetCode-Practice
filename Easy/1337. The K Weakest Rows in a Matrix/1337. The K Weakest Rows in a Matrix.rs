use std::collections::BinaryHeap;

impl Solution {
    pub fn k_weakest_rows(mat: Vec<Vec<i32>>, k: i32) -> Vec<i32> {
        let mut heap: BinaryHeap<(i32, i32)> = BinaryHeap::new(); // Explicit type annotation

        for (i, row) in mat.iter().enumerate() {
            let strength = row.iter().sum();
            heap.push((strength, i as i32));
            if heap.len() > k as usize {
                heap.pop();
            }
        }

        let mut result = Vec::with_capacity(k as usize);
        while let Some((_, i)) = heap.pop() {
            result.push(i);
        }

        result.reverse(); // Reverse the result to get the weakest rows first
        result
    }
}
