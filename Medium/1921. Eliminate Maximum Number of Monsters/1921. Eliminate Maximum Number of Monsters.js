/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
    const n = dist.length;
    const timeToReach = [];

    for (let i = 0; i < n; i++) {
        timeToReach.push(Math.ceil(dist[i] / speed[i]));
    }

    timeToReach.sort((a, b) => a - b);

    let eliminated = 0;
    let time = 0;

    for (let i = 0; i < n; i++) {
        if (timeToReach[i] > time) {
            eliminated += 1;
            time += 1;
        } else {
            break;
        }
    }

    return eliminated;
};
