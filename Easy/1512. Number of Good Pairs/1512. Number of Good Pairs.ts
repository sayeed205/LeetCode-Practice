function numIdenticalPairs(nums: number[]): number {
    const countArray: number[] = new Array(101).fill(0); // Assuming nums[i] <= 100
    let goodPairs: number = 0;

    for (const num of nums) {
        goodPairs += countArray[num];
        countArray[num]++;
    }

    return goodPairs;
}
