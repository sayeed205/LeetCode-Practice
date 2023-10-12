/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     this.get = function(index) {
 *         // This function should return the value at the given index.
 *     };
 *
 *     this.length = function() {
 *         // This function should return the length of the array.
 *     };
 * }

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    let left = 0;
    let right = mountainArr.length() - 1;

    // Find the peak element (the maximum element) in the mountain array using binary search.
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // Now, you have found the peak. Use two binary searches to find the target on both sides of the peak.
    const peak = left;
    const leftResult = binarySearch(target, mountainArr, 0, peak, true);
    if (leftResult !== -1) {
        return leftResult;
    }

    const rightResult = binarySearch(
        target,
        mountainArr,
        peak,
        mountainArr.length() - 1,
        false
    );
    return rightResult;
};

function binarySearch(target, mountainArr, left, right, ascending) {
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const midVal = mountainArr.get(mid);

        if (midVal === target) {
            return mid;
        } else if (
            (midVal < target && ascending) ||
            (midVal > target && !ascending)
        ) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
