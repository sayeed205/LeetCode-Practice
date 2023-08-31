/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
    const coverage = new Array(n + 1).fill(0);

    // Update coverage array based on tap ranges
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i] === 0) {
            continue;
        }
        const left = Math.max(0, i - ranges[i]);
        coverage[left] = Math.max(coverage[left], i + ranges[i]);
    }

    let end = 0;
    let farthestCanReach = 0;
    let tapCount = 0;

    // Traverse the garden and calculate required taps
    for (let i = 0; i <= n; i++) {
        if (i > end) {
            if (farthestCanReach <= end) {
                return -1;
            }
            end = farthestCanReach;
            tapCount++;
        }
        farthestCanReach = Math.max(farthestCanReach, coverage[i]);
    }

    // Return the total taps required, considering the endpoint
    return tapCount + (end < n ? 1 : 0);
};
