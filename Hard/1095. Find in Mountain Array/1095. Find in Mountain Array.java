/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 *     public int get(int index);
 *     public int length();
 * }
 */
 
 class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int left = 0;
        int right = mountainArr.length() - 1;

        // Find the peak element (the maximum element) in the mountain array using binary search.
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Now, you have found the peak. Use two binary searches to find the target on both sides of the peak.
        int peak = left;
        int leftResult = binarySearch(target, mountainArr, 0, peak, true);
        if (leftResult != -1) {
            return leftResult;
        }

        int rightResult = binarySearch(target, mountainArr, peak, mountainArr.length() - 1, false);
        return rightResult;
    }

    private int binarySearch(int target, MountainArray mountainArr, int left, int right, boolean ascending) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midVal = mountainArr.get(mid);

            if (midVal == target) {
                return mid;
            } else if ((midVal < target && ascending) || (midVal > target && !ascending)) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
