impl Solution {
    pub fn full_bloom_flowers(flowers: Vec<Vec<i32>>, people: Vec<i32>) -> Vec<i32> {
        // Create vectors to store the start and end times of flower blooming.
        let mut start = Vec::with_capacity(flowers.len());
        let mut end = Vec::with_capacity(flowers.len());

        // Extract start and end times from the flowers input.
        for flower in flowers {
            start.push(flower[0]);
            end.push(flower[1]);
        }

        // Sort the start and end vectors in ascending order.
        start.sort_unstable();
        end.sort_unstable();

        let mut ret = Vec::with_capacity(people.len());

        // For each person's arrival time, find the number of flowers in full bloom.
        for p in people {
            // Use partition_point to count the number of start times <= person's arrival.
            let s = start.partition_point(|&x| x <= p);
            // Use partition_point to count the number of end times < person's arrival.
            let e = end.partition_point(|&x| x < p);
            // Calculate the difference to get the count of flowers in full bloom.
            ret.push((s - e) as i32);
        }

        ret
    }
}
