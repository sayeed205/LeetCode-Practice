## [1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)

Given a weighted undirected connected graph with `n` vertices numbered from `0` to `n-1`, and an array `edges` where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>, weight<sub>i</sub>]</code> represents a bidirectional and weighted edge between nodes _a<sub>i</sub>_ and _b<sub>i</sub>_. A minimum spanning tree (MST) is a subset of the edges of the graph that connects all vertices without cycles and with the minimum possible total edge weight.

#### Example 1:

![example1](https://assets.leetcode.com/uploads/2020/06/04/ex1.png)

<pre>
<strong>Input:</strong> n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
<strong>Output:</strong> [[0,1],[2,3,4,5]]
<strong>Explanation:</strong> The figure above describes the graph.
The following figure shows all the possible MSTs:
<img alt="" src="https://assets.leetcode.com/uploads/2020/06/04/msts.png" style="width: 242px; height: 242px;">
Notice that the two edges 0 and 1 appear in all MSTs, therefore they are critical edges, so we return [[0,1]].
We can also see that the edges 2, 3, and 4 are only part of the MST 1 which means they are pseudo-critical edges.
</pre>

#### Example 2:

![example2](https://assets.leetcode.com/uploads/2020/06/04/ex2.png)

<pre>
<strong>Input:</strong> n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
<strong>Output:</strong> [[],[0,1,2,3]]
<strong>Explanation:</strong> We can observe that since all 4 edges have equal weight, choosing any 3 edges from the given 4 will yield an MST. Therefore all 4 edges are pseudo-critical.
</pre>

#### Constraints:

-   `2 <= n <= 100`
-   `1 <= edges.length <= min(200, n * (n - 1) / 2)`
-   `edges[i].length == 3`
-   `0 <= a<sub>i</sub> < b<sub>i</sub> < n`
-   <code>1 <= weight<sub>i</sub> <= 1000</code>
-   All pairs <code>(a<sub>i</sub>, b<sub>i</sub>)</code> are distinct.
