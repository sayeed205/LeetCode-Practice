/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    this.n = n;
    this.graph = new Map();

    for (const edge of edges) {
        this.addEdge(edge);
    }
};

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    const [from, to, edgeCost] = edge;
    this.graph.set(from, (this.graph.get(from) || []).concat([[to, edgeCost]]));
};

/**
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    if (node1 === node2) return 0;

    const minTimes = new Array(this.n).fill(Infinity);
    minTimes[node1] = 0;

    const visited = new Set();

    while (visited.size !== this.n) {
        const [source, minTimeToSource] = this.getSourceWithMinTime(minTimes, visited);

        if (minTimeToSource === Infinity) {
            return minTimes[node2] === Infinity ? -1 : minTimes[node2];
        }

        visited.add(source);

        for (const [target, timeToTarget] of (this.graph.get(source) || [])) {
            if (visited.has(target)) {
                continue;
            }

            const newTimeToTarget = minTimeToSource + timeToTarget;
            const currentTimeToTarget = minTimes[target];

            if (newTimeToTarget < currentTimeToTarget) {
                minTimes[target] = newTimeToTarget;
            }
        }
    }

    return minTimes[node2] === Infinity ? -1 : minTimes[node2];
};

/**
 * @param {number[]} minTimes
 * @param {Set<number>} visited
 * @return {[number, number]}
 */
Graph.prototype.getSourceWithMinTime = function(minTimes, visited) {
    let source = -1;
    let minTime = Infinity;

    for (const [to, edgeCost] of minTimes.entries()) {
        if (visited.has(to)) {
            continue;
        }

        if (edgeCost < minTime) {
            minTime = edgeCost;
            source = to;
        }
    }

    return [source, minTime];
};
