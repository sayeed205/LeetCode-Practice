/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    const cityCounts = new Array(n).fill(0);
    const isConnected = new Array(n)
        .fill(null)
        .map(() => new Array(n).fill(false));

    for (const road of roads) {
        const [city1, city2] = road;
        cityCounts[city1]++;
        cityCounts[city2]++;
        isConnected[city1][city2] = true;
        isConnected[city2][city1] = true;
    }

    let maxRank = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let rank = cityCounts[i] + cityCounts[j];
            if (isConnected[i][j]) {
                rank--; // Subtract one if the cities are directly connected by a road
            }
            maxRank = Math.max(maxRank, rank);
        }
    }

    return maxRank;
};
