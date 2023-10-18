function minimumTime(n: number, relations: number[][], time: number[]): number {
    const map = new Map<number, number[]>();
    for (const [prev, next] of relations) {
        if (map.has(next)) {
            map.get(next).push(prev);
        } else {
            map.set(next, [prev]);
        }
    }
    let max = 0;
    const memo = new Array(n + 1).fill(-1);
    for (let i = 1; i <= n; i++) {
        if (memo[i] !== -1) {
            continue;
        }
        max = Math.max(max, dfs(i));
    }
    return max;
    function dfs(node: number) {
        if (!map.has(node)) {
            return time[node - 1];
        }
        if (memo[node] !== -1) {
            return memo[node];
        }
        let innerMax = -1;
        const prerequisites = map.get(node);
        for (const course of prerequisites) {
            innerMax = Math.max(innerMax, time[node - 1] + dfs(course));
        }
        return (memo[node] = innerMax);
    }
}
