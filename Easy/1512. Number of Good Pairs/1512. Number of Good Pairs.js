/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    const countArray = new Array(101).fill(0); // Assuming nums[i] <= 100
    let goodPairs = 0;

    for (const num of nums) {
        goodPairs += countArray[num];
        countArray[num]++;
    }

    return goodPairs;
};
