function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b); // Sort the array

    let maxFreq = 0;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // Check if we need to shrink the window
        while ((right - left + 1) * nums[right] - sum > k) {
            sum -= nums[left];
            left += 1;
        }

        // Update the maximum frequency
        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
}
