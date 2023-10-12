/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

function findInMountainArray(
    target: number,
    mountainArr: MountainArray
): number {
    let left: number = 0;
    let right: number = mountainArr.length() - 1;

    // Find the peak element (the maximum element) in the mountain array using binary search.
    while (left < right) {
        let mid: number = left + Math.floor((right - left) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // Now, you have found the peak. Use two binary searches to find the target on both sides of the peak.
    const peak: number = left;
    const leftResult: number = binarySearch(target, mountainArr, 0, peak, true);
    if (leftResult !== -1) {
        return leftResult;
    }

    const rightResult: number = binarySearch(
        target,
        mountainArr,
        peak,
        mountainArr.length() - 1,
        false
    );
    return rightResult;
}

function binarySearch(
    target: number,
    mountainArr: MountainArray,
    left: number,
    right: number,
    ascending: boolean
): number {
    while (left <= right) {
        const mid: number = left + Math.floor((right - left) / 2);
        const midVal: number = mountainArr.get(mid);

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
