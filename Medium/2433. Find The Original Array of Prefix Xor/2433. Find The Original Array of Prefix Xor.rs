impl Solution {
    pub fn find_array(pref: Vec<i32>) -> Vec<i32> {
        let n = pref.len();
        let mut arr = vec![0; n];

        for i in 0..n {
            if i == 0 {
                arr[i] = pref[i];
            } else {
                arr[i] = pref[i] ^ pref[i - 1];
            }
        }

        arr
    }
}
