impl Solution {
    pub fn sort_by_bits(arr: Vec<i32>) -> Vec<i32> {
        // Define a custom sorting comparator
        fn count_ones(n: i32) -> i32 {
            // Count the number of 1 bits in the binary representation of n
            let mut count = 0;
            let mut n = n;
            while n > 0 {
                count += n & 1;
                n >>= 1;
            }
            count
        }

        let mut arr = arr;
        // Sort the array using counting sort
        arr.sort_by_cached_key(|&x| (count_ones(x), x));

        arr
    }
}
