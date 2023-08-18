## [1615. Maximal Network Rank](https://leetcode.com/problems/maximal-network-rank/)

There is an infrastructure of `n` cities with some number of `roads` connecting these cities. Each **roads[i] = [_a<sub>i</sub>_, _b<sub>i</sub>_]** indicates that there is a bidirectional road between cities _a<sub>i</sub>_ and _b<sub>i</sub>_.

The **network rank** of **two different cities** is defined as the total number of **directly** connected roads to **either** city. If a road is directly connected to both cities, it is only counted **once**.

The **maximal network rank** of the infrastructure is the **maximum network rank** of all pairs of different cities.

Given the integer `n` and the array `roads`, return the **maximal network rank** of the entire infrastructure.

#### Example 1:

![example 1](https://assets.leetcode.com/uploads/2020/09/21/ex1.png)

<pre>
<strong>Input:</strong> n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.
</pre>

#### Example 2:

![example 2](https://assets.leetcode.com/uploads/2020/09/21/ex2.png)

<pre>
<strong>Input:</strong> n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]
<strong>Output:</strong> 5
<strong>Explanation:</strong> There are 5 roads that are connected to cities 1 or 2.
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The network rank of 2 and 5 is 5. Notice that all the cities do not have to be connected.
</pre>

#### Constraints:

<ul>
    <li><code>2 &lt;= n &lt;= 100</code></li>
    <li><code>0 &lt;= roads.length &lt;= n * (n - 1) / 2</code></li>
    <li><code>roads[i].length == 2</code></li>
    <li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub>&nbsp;&lt;= n-1</code></li>
    <li><code>a<sub>i</sub>&nbsp;!=&nbsp;b<sub>i</sub></code></li>
    <li>Each pair of cities has <strong>at most one</strong> road connecting them.</li>
</ul>
