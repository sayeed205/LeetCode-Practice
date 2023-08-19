function findCriticalAndPseudoCriticalEdges(
    n: number,
    edges: number[][]
): number[][] {
    function findParent(parent: number[], p: number): number {
        if (parent[p] !== p) {
            parent[p] = findParent(parent, parent[p]);
        }
        return parent[p];
    }

    function union(parent: number[], u: number, v: number): void {
        const pu = findParent(parent, u);
        const pv = findParent(parent, v);
        parent[pu] = pv;
    }

    function findMST(
        n: number,
        edges: number[][],
        block: number,
        e: number
    ): number {
        const parent: number[] = Array.from({ length: n }, (_, i) => i);
        let weight = 0;

        if (e !== -1) {
            weight += edges[e][2];
            union(parent, edges[e][0], edges[e][1]);
        }

        for (let i = 0; i < edges.length; i++) {
            if (i === block) {
                continue;
            }

            if (
                findParent(parent, edges[i][0]) ===
                findParent(parent, edges[i][1])
            ) {
                continue;
            }

            union(parent, edges[i][0], edges[i][1]);
            weight += edges[i][2];
        }

        for (let i = 0; i < n; i++) {
            if (findParent(parent, i) !== findParent(parent, 0)) {
                return Number.MAX_SAFE_INTEGER;
            }
        }

        return weight;
    }

    const edgesWithIndices: number[][] = edges.map((edge, idx) => [
        ...edge,
        idx,
    ]);

    edgesWithIndices.sort((a, b) => a[2] - b[2]);

    const mstwt = findMST(n, edgesWithIndices, -1, -1);

    const critical: number[] = [];
    const pseudoCritical: number[] = [];

    for (let i = 0; i < edgesWithIndices.length; i++) {
        if (mstwt < findMST(n, edgesWithIndices, i, -1)) {
            critical.push(edgesWithIndices[i][3]);
        } else if (mstwt === findMST(n, edgesWithIndices, -1, i)) {
            pseudoCritical.push(edgesWithIndices[i][3]);
        }
    }

    return [critical, pseudoCritical];
}
