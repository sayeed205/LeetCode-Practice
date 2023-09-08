/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [];

    const result = [];
    result.push([1]); // The first row is always [1].

    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1];
        const newRow = [];

        newRow.push(1); // The first element is always 1.

        for (let j = 1; j < i; j++) {
            // Calculate the value using the formula: C(n, k) = C(n-1, k-1) + C(n-1, k)
            const value = prevRow[j - 1] + prevRow[j];
            newRow.push(value);
        }

        newRow.push(1); // The last element is always 1.
        result.push(newRow);
    }

    return result;
};
