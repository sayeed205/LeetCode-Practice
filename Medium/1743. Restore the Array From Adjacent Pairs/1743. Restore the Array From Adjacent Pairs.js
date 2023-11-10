/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
    const adjacencyMap = new Map();

    // Build the adjacency map
    for (const pair of adjacentPairs) {
        if (!adjacencyMap.has(pair[0])) {
            adjacencyMap.set(pair[0], []);
        }
        if (!adjacencyMap.has(pair[1])) {
            adjacencyMap.set(pair[1], []);
        }

        adjacencyMap.get(pair[0]).push(pair[1]);
        adjacencyMap.get(pair[1]).push(pair[0]);
    }

    const n = adjacentPairs.length + 1;
    const result = new Array(n);
    const visited = new Set();

    // Find the starting point
    let start = 0;
    for (const [key, value] of adjacencyMap.entries()) {
        if (value.length === 1) {
            start = key;
            break;
        }
    }

    // Reconstruct the array
    result[0] = start;
    result[1] = adjacencyMap.get(start)[0];

    visited.add(start);
    visited.add(result[1]);

    for (let i = 2; i < n; i++) {
        const neighbors = adjacencyMap.get(result[i - 1]);
        result[i] =
            neighbors[0] === result[i - 2] ? neighbors[1] : neighbors[0];

        visited.add(result[i]);
    }

    return result;
};
