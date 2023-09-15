function minCostConnectPoints(points: number[][]): number {
    const n = points.length;
    const edges: [number, number, number][] = [];

    // Create edges and calculate their weights
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const weight =
                Math.abs(points[i][0] - points[j][0]) +
                Math.abs(points[i][1] - points[j][1]);
            edges.push([i, j, weight]);
        }
    }

    // Sort edges by weight
    edges.sort((a, b) => a[2] - b[2]);

    const parent: number[] = new Array(n).fill(0).map((_, i) => i);

    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    let minCost = 0;
    let edgesAdded = 0;

    for (const [u, v, weight] of edges) {
        const parentU = find(u);
        const parentV = find(v);
        if (parentU !== parentV) {
            parent[parentU] = parentV;
            minCost += weight;
            edgesAdded++;
            if (edgesAdded === n - 1) {
                break; // Minimum spanning tree is complete
            }
        }
    }

    return minCost;
}

// Example usage:
const points = [
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
];
const result = minCostConnectPoints(points);
console.log(result); // Output: 20
