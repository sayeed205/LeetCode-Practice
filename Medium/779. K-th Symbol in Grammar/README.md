## [779. K-th Symbol in Grammar](https://leetcode.com/problems/k-th-symbol-in-grammar)

We build a table of `n` rows (**1-indexed**). We start by writing `0` in the <code>1<sup>st</sup></code> row. Now in every subsequent row, we look at the previous row and replace each occurrence of `0` with `01`, and each occurrence of `1` with `10`.

-   For example, for `n = 3`, the <code>1<sup>st</sup></code> row is `0`, the <code>2<sup>nd</sup></code> row is `01`, and the <code>3<sup>rd</sup></code> row is `0110`.

Given two integer `n` and `k`, return the <code>k</sup>th</sup></code> (**1-indexed**) symbol in the <code>n<sup>th</sup></code> row of a table of `n` rows.

#### Example 1:

<pre>
<strong>Input:</strong> n = 1, k = 1
<strong>Output:</strong> 0
<strong>Explanation:</strong> row 1: 0
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> n = 2, k = 1
<strong>Output:</strong> 0
<strong>Explanation:</strong>
row 1: 0
row 2: 01
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> n = 2, k = 2
<strong>Output:</strong> 1
<strong>Explanation:</strong>
row 1: 0
row 2: 01
</pre>

#### Constraints:

-   `1 <= n <= 30`
-   <code>1 <= k <= 2<sup>n - 1</sup></code>
