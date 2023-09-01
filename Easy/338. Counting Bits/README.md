## [338. Counting Bits](https://leetcode.com/problems/counting-bits/)

Given an integer `n`, return _an array_ `ans` _of length_ `n + 1` _such that for each_ `i` (`0 <= i <= n`), `ans[i]` _is the **number of** `1`**'s** in the binary representation of_ `i`.

#### Example 1:

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> [0,1,1]
<strong>Explanation:</strong>
0 --> 0
1 --> 1
2 --> 10
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> [0,1,1,2,1,2]
<strong>Explanation:</strong>
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
</pre>

#### Constraints:

-   <code>0 <= n <= 10<sup>5</sup></code>

#### Follow up:

-   It is very easy to come up with a solution with a runtime of `O(n log n)`. Can you do it in linear time `O(n)` and possibly in a single pass?
-   Can you do it without using any built-in function (i.e., like `__builtin_popcount` in C++)?
