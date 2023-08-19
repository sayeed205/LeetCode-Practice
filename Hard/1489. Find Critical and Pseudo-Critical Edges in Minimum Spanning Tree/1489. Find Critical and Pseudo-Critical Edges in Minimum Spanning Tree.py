class Solution:
    def findCriticalAndPseudoCriticalEdges(
        self, n: int, edges: List[List[int]]
    ) -> List[List[int]]:
        def findParent(parent, p):
            if parent[p] != p:
                parent[p] = findParent(parent, parent[p])
            return parent[p]

        def union(parent, u, v):
            pu, pv = findParent(parent, u), findParent(parent, v)
            parent[pu] = pv

        def findMST(n, edges, block, e):
            parent = list(range(n))
            weight = 0

            if e != -1:
                weight += edges[e][2]
                union(parent, edges[e][0], edges[e][1])

            for i in range(len(edges)):
                if i == block:
                    continue

                if findParent(parent, edges[i][0]) == findParent(
                    parent, edges[i][1]
                ):
                    continue

                union(parent, edges[i][0], edges[i][1])
                weight += edges[i][2]

            for i in range(n):
                if findParent(parent, i) != findParent(parent, 0):
                    return float("inf")

            return weight

        critical = []
        pseudoCritical = []

        for i in range(len(edges)):
            edges[i].append(i)

        edges.sort(key=lambda x: x[2])

        mstwt = findMST(n, edges, -1, -1)

        for i in range(len(edges)):
            if mstwt < findMST(n, edges, i, -1):
                critical.append(edges[i][3])
            elif mstwt == findMST(n, edges, -1, i):
                pseudoCritical.append(edges[i][3])

        return [critical, pseudoCritical]
