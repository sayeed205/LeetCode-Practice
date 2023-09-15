/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    const n = points.length;
    const visited = new Array(n).fill(false);
    const minCosts = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    minCosts[0] = 0;
    let minCost = 0;

    const getManhattanDistance = (point1, point2) => {
        return (
            Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1])
        );
    };

    for (let i = 0; i < n; i++) {
        let u = -1;
        // Find the unvisited node with the minimum cost
        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || minCosts[j] < minCosts[u])) {
                u = j;
            }
        }

        visited[u] = true;
        minCost += minCosts[u];

        // Update the minimum cost to other unvisited nodes
        for (let v = 0; v < n; v++) {
            if (!visited[v]) {
                const cost = getManhattanDistance(points[u], points[v]);
                if (cost < minCosts[v]) {
                    minCosts[v] = cost;
                }
            }
        }
    }

    return minCost;
};
