/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
    const leftTime = Math.max(...left, 0);
    const rightTime = Math.max(...right.map(position => n - position), 0);
    return Math.max(leftTime, rightTime);
};
