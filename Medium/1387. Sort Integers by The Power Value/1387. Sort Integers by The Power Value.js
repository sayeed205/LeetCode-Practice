/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
    const nums = [];

    for (let i = lo; i <= hi; i++) {
        nums.push([i, calculatePower(i)]);
    }

    nums.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    return nums[k - 1][0];
};

const calculatePower = x => {
    let steps = 0;
    while (x !== 1) {
        if (x % 2 === 0) {
            x /= 2;
        } else {
            x = 3 * x + 1;
        }
        steps++;
    }
    return steps;
};
