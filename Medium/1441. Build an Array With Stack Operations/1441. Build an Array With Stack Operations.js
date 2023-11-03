/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    const result = [];
    let current = 1;

    for (const num of target) {
        while (current < num) {
            result.push('Push');
            result.push('Pop');
            current++;
        }

        result.push('Push');
        current++;
    }

    return result;
};
