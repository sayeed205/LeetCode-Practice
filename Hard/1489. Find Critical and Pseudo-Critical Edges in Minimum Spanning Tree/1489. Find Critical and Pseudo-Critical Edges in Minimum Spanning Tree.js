var findCriticalAndPseudoCriticalEdges = function (n, edges) {
    const critical = [];
    const pseudoCritical = [];

    for (let i = 0; i < edges.length; i++) {
        edges[i].push(i);
    }

    edges.sort((a, b) => a[2] - b[2]);

    const mstwt = findMST(n, edges, -1, -1);

    for (let i = 0; i < edges.length; i++) {
        if (mstwt < findMST(n, edges, i, -1)) {
            critical.push(edges[i][3]);
        } else if (mstwt === findMST(n, edges, -1, i)) {
            pseudoCritical.push(edges[i][3]);
        }
    }

    return [critical, pseudoCritical];
};

const findMST = (n, edges, block, e) => {
    const parent = new Array(n).fill(0).map((_, i) => i);
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
            findParent(parent, edges[i][0]) === findParent(parent, edges[i][1])
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
};

const findParent = (parent, p) => {
    return parent[p] === p ? p : (parent[p] = findParent(parent, parent[p]));
};

const union = (parent, u, v) => {
    const pu = findParent(parent, u);
    const pv = findParent(parent, v);
    parent[pu] = pv;
};
