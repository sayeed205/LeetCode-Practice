function searchRange(nums: number[], target: number): number[] {
    const result: number[] = [-1, -1];
    const n: number = nums.length;

    // Find the leftmost position of the target
    let left: number = 0;
    let right: number = n - 1;
    while (left < right) {
        const mid: number = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (nums[left] === target) {
        result[0] = left;
    }

    // Find the rightmost position of the target
    right = n - 1;
    while (left < right) {
        const mid: number = left + Math.ceil((right - left) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    if (nums[right] === target) {
        result[1] = right;
    }

    return result;
}
