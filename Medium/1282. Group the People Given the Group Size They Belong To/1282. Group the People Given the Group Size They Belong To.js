/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const groups = {}; // Using an object as a dictionary to store groups
    const result = []; // Initialize the result array

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];

        if (!groups[size]) {
            groups[size] = []; // Initialize the group if it doesn't exist
        }

        groups[size].push(i); // Add the person to the corresponding group

        if (groups[size].length === size) {
            // If the group is full, add it to the result and reset it
            result.push(groups[size]);
            groups[size] = [];
        }
    }

    for (const size in groups) {
        if (groups[size].length > 0) {
            result.push(groups[size]); // Add any remaining groups to the result
        }
    }

    return result;
};
