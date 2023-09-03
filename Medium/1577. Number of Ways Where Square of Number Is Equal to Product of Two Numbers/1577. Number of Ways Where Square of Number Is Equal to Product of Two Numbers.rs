impl Solution {
    pub fn num_triplets(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let mut ans = 0;
        let mut nums1_product = std::collections::HashMap::new();
        let mut nums2_product = std::collections::HashMap::new();

        for (nums, products) in vec![(&nums1, &mut nums1_product), (&nums2, &mut nums2_product)] {
            for i in 0..nums.len() {
                for j in i + 1..nums.len() {
                    let product = (nums[i] as i64) * (nums[j] as i64);
                    *products.entry(product).or_insert(0) += 1;
                }
            }
        }

        for num in &nums1 {
            let target = (*num as i64).pow(2);
            if let Some(&value) = nums2_product.get(&target) {
                ans += value;
            }
        }

        for num in &nums2 {
            let target = (*num as i64).pow(2);
            if let Some(&value) = nums1_product.get(&target) {
                ans += value;
            }
        }

        ans
    }
}
