/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let result = '';

    while (columnNumber > 0) {
        columnNumber--; // Adjust to 0-based index
        const remainder = columnNumber % 26;
        const digit = String.fromCharCode('A'.charCodeAt(0) + remainder);
        result = digit + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};
