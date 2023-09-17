/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
    const n = graph.length;
    const targetMask = (1 << n) - 1;
    const queue = [];
    const visited = new Array(n)
        .fill(null)
        .map(() => new Array(1 << n).fill(false)); // DP table to store visited states
    for (let i = 0; i < n; i++) {
        queue.push([i, 1 << i, 0]); // Initialize the queue with starting nodes
        visited[i][1 << i] = true;
    }
    let steps = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const [node, mask, cost] = queue.shift();
            if (mask === targetMask) {
                return cost;
            }
            for (const neighbor of graph[node]) {
                const newMask = mask | (1 << neighbor);
                if (!visited[neighbor][newMask]) {
                    visited[neighbor][newMask] = true;
                    queue.push([neighbor, newMask, cost + 1]);
                }
            }
        }
        steps++;
    }

    return -1; // Return -1 if no path exists (this should not occur for connected graphs).
};
