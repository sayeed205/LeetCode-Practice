function majorityElement(nums: number[]): number[] {
    const counts = new Map<number, number>();
    const result: number[] = [];

    // Count the occurrences of each number
    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    // Check if any number appears more than ⌊ n/3 ⌋ times
    for (const [num, count] of counts.entries()) {
        if (count > nums.length / 3) {
            result.push(num);
        }
    }

    return result;
}
