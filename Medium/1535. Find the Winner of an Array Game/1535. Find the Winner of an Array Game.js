/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
    let current = arr[0];
    let winCount = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > current) {
            current = arr[i];
            winCount = 1;
        } else {
            winCount++;
        }

        if (winCount === k) {
            return current;
        }
    }

    if (k > arr.length) {
        return Math.max(...arr);
    }

    return current;
};
