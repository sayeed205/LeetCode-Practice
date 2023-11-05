impl Solution {
    pub fn get_winner(arr: Vec<i32>, k: i32) -> i32 {
        let mut current = arr[0];
        let mut win_count = 0;

        for i in 1..arr.len() {
            if arr[i] > current {
                current = arr[i];
                win_count = 1;
            } else {
                win_count += 1;
            }

            if win_count == k {
                return current;
            }
        }

        if k > arr.len() as i32 {
            return *arr.iter().max().unwrap();
        }

        current
    }
}
