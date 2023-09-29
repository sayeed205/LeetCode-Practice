function isMonotonic(nums: number[]): boolean {
    let increasing = false;
    let decreasing = false;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            increasing = true;
        } else if (nums[i] < nums[i - 1]) {
            decreasing = true;
        }

        if (increasing && decreasing) {
            // If we find both increasing and decreasing elements, the array is not monotonic.
            return false;
        }
    }

    return true;
}
