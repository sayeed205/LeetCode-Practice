impl Solution {
    pub fn maximum_element_after_decrementing_and_rearranging(mut arr: Vec<i32>) -> i32 {
        arr.sort(); // Step 1

        let mut prev = 0;
        for i in 0..arr.len() {
            arr[i] = arr[i].min(prev + 1); // Step 2
            prev = arr[i];
        }

        arr.iter().max().unwrap_or(&0).clone() // Step 3
    }
}
