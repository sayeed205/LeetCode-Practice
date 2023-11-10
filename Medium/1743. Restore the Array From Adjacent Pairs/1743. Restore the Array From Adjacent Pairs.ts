function restoreArray(adjacentPairs: number[][]): number[] {
    const adjacencyMap: Map<number, number[]> = new Map();

    // Build the adjacency map
    for (const pair of adjacentPairs) {
        adjacencyMap.set(
            pair[0],
            (adjacencyMap.get(pair[0]) || []).concat(pair[1])
        );
        adjacencyMap.set(
            pair[1],
            (adjacencyMap.get(pair[1]) || []).concat(pair[0])
        );
    }

    const n: number = adjacentPairs.length + 1;
    const result: number[] = new Array(n).fill(0);
    const visited: Set<number> = new Set();

    // Find the starting point
    let start: number = 0;
    for (const [key, value] of adjacencyMap) {
        if (value.length === 1) {
            start = key;
            break;
        }
    }

    // Reconstruct the array using the logic from the provided Java code
    result[0] = start;
    result[1] = adjacencyMap.get(start)![0];

    visited.add(start);
    visited.add(result[1]);

    for (let i = 2; i < n; i++) {
        const neighbors = adjacencyMap.get(result[i - 1])!;
        result[i] =
            neighbors[0] === result[i - 2] ? neighbors[1] : neighbors[0];

        visited.add(result[i]);
    }

    return result;
}
