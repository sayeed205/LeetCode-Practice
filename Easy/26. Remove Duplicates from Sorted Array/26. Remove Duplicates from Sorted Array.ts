function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Move the unique element to the next position
            k++; // Increment the count of unique elements
        }
    }

    return k;
}
