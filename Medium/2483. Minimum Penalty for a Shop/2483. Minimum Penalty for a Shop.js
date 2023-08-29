/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
    let maxScore = 0;
    let bestHour = -1;
    let score = 0;

    for (let hour = 0; hour < customers.length; hour++) {
        const c = customers.charAt(hour);
        score += c === 'Y' ? 1 : -1;
        if (score > maxScore) {
            maxScore = score;
            bestHour = hour;
        }
    }

    return bestHour + 1;
};
