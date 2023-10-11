/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, people) {
    function search(arr, target) {
        let low = 0;
        let high = arr.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] > target) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }

    const starts = new Uint32Array(flowers.length);
    const ends = new Uint32Array(flowers.length);
    for (let i = 0; i < flowers.length; i++) {
        starts[i] = flowers[i][0];
        ends[i] = flowers[i][1] + 1;
    }
    starts.sort();
    ends.sort();

    return people.map(t => search(starts, t) - search(ends, t));
};
