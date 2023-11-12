## [815. Bus Routes](https://leetcode.com/problems/bus-routes/)

You are given an array `routes` representing bus routes where `routes[i]` is a bus route that the <code>i<sup>th</sup></code> bus repeats forever.

-   For example, if `routes[0] = [1, 5, 7]`, this means that the <code>0<sup>th</sup></code> bus travels in the sequence <code>1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ...</code> forever.

You will start at the bus stop `source` (You are not on any bus initially), and you want to go to the bus stop `target`. You can travel between bus stops by buses only.

Return _the least number of buses you must take to travel from_ `source` _to_ `target`. Return `-1` if it is not possible.

#### Example 1:

<pre>
<strong>Input:</strong> routes = [[1,2,7],[3,6,7]], source = 1, target = 6
<strong>Output:</strong> 2
<strong>Explanation:</strong> The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
<strong>Output:</strong> -1
</pre>

#### Constraints:

-   `1 <= routes.length <= 500`.
-   <code>1 <= routes[i].length <= 10<sup>5</sup></code>
-   All the values of `routes[i]` are **unique**.
-   <code>sum(routes[i].length) <= 10<sup>5</sup></code>
-   <code>0 <= routes[i][j] < 10<sup>6</sup></code>
-   <code>0 <= source, target < 10<sup>6</sup></code>
