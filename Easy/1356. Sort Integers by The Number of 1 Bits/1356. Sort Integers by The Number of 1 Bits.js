/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    // Define a custom sorting comparator
    function countOnes(n) {
        // Count the number of 1 bits in the binary representation of n
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }

    // Sort the array using the custom comparator
    arr.sort((a, b) => {
        const countA = countOnes(a);
        const countB = countOnes(b);

        if (countA !== countB) {
            return countA - countB; // Sort by the number of 1 bits
        } else {
            return a - b; // If the number of 1 bits is the same, sort in ascending order
        }
    });

    return arr;
};
