impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> Vec<i32> {
        let mut candidate1 = 0;
        let mut candidate2 = 0;
        let mut count1 = 0;
        let mut count2 = 0;

        // Step 1: Find the two potential majority candidates
        for &num in nums.iter() {
            if num == candidate1 {
                count1 += 1;
            } else if num == candidate2 {
                count2 += 1;
            } else if count1 == 0 {
                candidate1 = num;
                count1 = 1;
            } else if count2 == 0 {
                candidate2 = num;
                count2 = 1;
            } else {
                count1 -= 1;
                count2 -= 1;
            }
        }

        // Step 2: Count the occurrences of the two candidates
        count1 = 0;
        count2 = 0;

        for &num in nums.iter() {
            if num == candidate1 {
                count1 += 1;
            } else if num == candidate2 {
                count2 += 1;
            }
        }

        // Step 3: Check if candidates meet the criteria
        let mut result = vec![];

        if count1 > nums.len() / 3 {
            result.push(candidate1);
        }
        if count2 > nums.len() / 3 {
            result.push(candidate2);
        }

        result
    }
}
