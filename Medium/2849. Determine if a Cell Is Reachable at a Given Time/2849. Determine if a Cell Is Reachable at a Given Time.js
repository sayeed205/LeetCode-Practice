/**
 * Determines if a cell is reachable at a given time.
 *
 * @param {number} sx - Starting x-coordinate
 * @param {number} sy - Starting y-coordinate
 * @param {number} fx - Ending x-coordinate
 * @param {number} fy - Ending y-coordinate
 * @param {number} t - Time in seconds
 * @return {boolean} - Returns true if the cell can be reached in exactly t seconds, or false otherwise
 */
var isReachableAtTime = function (sx, sy, fx, fy, t) {
    const dx = Math.abs(sx - fx);
    const dy = Math.abs(sy - fy);

    if (dx === 0 && dy === 0) {
        return t !== 1;
    } else {
        return Math.max(dx, dy) <= t;
    }
};
