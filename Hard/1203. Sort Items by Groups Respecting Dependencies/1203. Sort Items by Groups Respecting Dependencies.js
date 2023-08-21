/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
const sortItems = (n, m, group, beforeItems) => {
    for (let i = 0; i < n; i++) {
        if (group[i] === -1) {
            group[i] = m++;
        }
    }

    const groupGraph = initializeGraphSet(m);
    const itemGraph = initializeGraphSet(n);
    const indegreeGG = Array(m).fill(0);
    const indegreeGI = Array(n).fill(0);

    beforeItems.forEach((beforeList, i) => {
        const toGroup = group[i];
        beforeList.forEach(x => {
            const fromGroup = group[x];
            if (fromGroup !== toGroup && !groupGraph[fromGroup].has(toGroup)) {
                groupGraph[fromGroup].add(toGroup);
                indegreeGG[toGroup]++;
            }
            if (!itemGraph[x].has(i)) {
                itemGraph[x].add(i);
                indegreeGI[i]++;
            }
        });
    });

    const ggOrder = topologicalSort(groupGraph, indegreeGG);
    const giOrder = topologicalSort(itemGraph, indegreeGI);

    if (ggOrder.length === 0 || giOrder.length === 0) {
        return [];
    }

    const groupToItem = initializeGraphSet(m);
    giOrder.forEach(item => groupToItem[group[item]].add(item));

    const result = [];
    ggOrder.forEach(group_id => {
        result.push(...groupToItem[group_id]);
    });

    return result;
};

const initializeGraphSet = n => Array.from({ length: n }, () => new Set());

const topologicalSort = (graph, indegree) => {
    const result = [];
    const queue = [];
    const len = indegree.length;

    for (let i = 0; i < len; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        const cur = queue.shift();
        result.push(cur);

        for (const child of graph[cur]) {
            if (--indegree[child] === 0) {
                queue.push(child);
            }
        }
    }

    return result.length === len ? result : [];
};
