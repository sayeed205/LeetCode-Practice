function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length;
    if (n === 2) {
        return Math.min(cost[0], cost[1]);
    }

    let prev1 = cost[0];
    let prev2 = cost[1];

    for (let i = 2; i < n; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        prev1 = prev2;
        prev2 = current;
    }

    return Math.min(prev1, prev2);
}
