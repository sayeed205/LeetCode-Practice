/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * struct MountainArray;
 * impl MountainArray {
 *     fn get(index: i32) -> i32;
 *     fn length() -> i32;
 * }
 */

impl Solution {
    pub fn find_in_mountain_array(target: i32, mountainArr: &MountainArray) -> i32 {
        let mut left = 0;
        let mut right = mountainArr.length() - 1;

        // Find the peak element (the maximum element) in the mountain array using binary search.
        while left < right {
            let mid = left + (right - left) / 2;
            if mountainArr.get(mid) < mountainArr.get(mid + 1) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Now, you have found the peak. Use two binary searches to find the target on both sides of the peak.
        let peak = left;
        let left_result = Self::binary_search(target, mountainArr, 0, peak, true);
        if left_result != -1 {
            return left_result;
        }

        let right_result =
            Self::binary_search(target, mountainArr, peak, mountainArr.length() - 1, false);
        return right_result;
    }

    fn binary_search(
        target: i32,
        mountainArr: &MountainArray,
        mut left: i32,
        mut right: i32,
        ascending: bool,
    ) -> i32 {
        while left <= right {
            let mid = left + (right - left) / 2;
            let mid_val = mountainArr.get(mid);

            if mid_val == target {
                return mid;
            } else if (mid_val < target && ascending) || (mid_val > target && !ascending) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
