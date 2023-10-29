/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (n, m, p) {
    return Math.ceil(Math.log10(n) / Math.log10(p / m + 1));
};
