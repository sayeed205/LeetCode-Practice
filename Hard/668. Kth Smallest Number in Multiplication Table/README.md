## [668. Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)

Nearly everyone has used the [Multiplication Table](https://en.wikipedia.org/wiki/Multiplication_table). The multiplication table of size `m x n` is an integer matrix `mat` where `mat[i][j] == i * j` ( **1-indexed**).

Given three integers `m`, `n`, and `k`, return _the_ <code>k<sup>th</sup></code> _smallest element in the_ `m x n` _multiplication table_.

#### Example 1:

![example1](https://assets.leetcode.com/uploads/2021/05/02/multtable1-grid.jpg)

<pre>
<strong>Input:</strong> m = 3, n = 3, k = 5
<strong>Output:</strong> 3
<strong>Explanation:</strong> The 5<sup>th</sup> smallest number is 3.
</pre>

#### Example 2:

![example2](https://assets.leetcode.com/uploads/2021/05/02/multtable2-grid.jpg)

<pre>
<strong>Input:</strong> m = 2, n = 3, k = 6
<strong>Output:</strong> 6
<strong>Explanation:</strong> The 6<sup>th</sup> smallest number is 6.
</pre>

#### Constraints:

-   <code>1 <= m, n <= 3 \* 10<sup>4</sup></code>
-   <code>1 <= k <= m \* n</code>
