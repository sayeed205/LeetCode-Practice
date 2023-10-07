## [1420. Build Array Where You Can Find The Maximum Exactly K Comparisons](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/description/)

You are given three integers `n`, `m` and `k`. Consider the following algorithm to find the maximum element of an array of positive integers:
![img](https://assets.leetcode.com/uploads/2020/04/02/e.png)

You should build the array arr which has the following properties:
- `arr` has exactly `n` integers.
- `1 <= arr[i] <= m` where `(0 <= i < n)`.
- After applying the mentioned algorithm to `arr`, the value `search_cost` is equal to `k`.

Return *the number of ways* to build the array `arr` under the mentioned conditions. As the answer may grow large, the answer **must be** computed modulo <code>10<sup>9</sup> + 7</code>.

#### Example 1:
<pre>
<strong>Input:</strong> n = 2, m = 3, k = 1
<strong>Output:</strong> 6
<strong>Explanation:</strong> The possible arrays are [1, 1], [2, 1], [2, 2], [3, 1], [3, 2] [3, 3]
</pre>

#### Example 2:
<pre>
<strong>Input:</strong> n = 5, m = 2, k = 3
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no possible arrays that satisify the mentioned conditions.
</pre>

#### Example 3:
<pre>
<strong>Input:</strong> n = 9, m = 1, k = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only possible array is [1, 1, 1, 1, 1, 1, 1, 1, 1]
</pre>

#### Constraints:
- `1 <= n <= 50`
- `1 <= m <= 100`
- `0 <= k <= n`