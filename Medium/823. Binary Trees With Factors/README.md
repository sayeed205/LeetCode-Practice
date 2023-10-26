## [823. Binary Trees With Factors](https://leetcode.com/problems/binary-trees-with-factors/)

Given an array of unique integers, `arr`, where each integer `arr[i]` is strictly greater than `1`.

We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.

Return _the number of binary trees we can make_. The answer may be too large so return the answer **modulo** <code>10<sup>9</sup> + 7</code>.

#### Example 1:

<pre>
<strong>Input:</strong> arr = [2,4]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can make these trees: <code>[2], [4], [4, 2, 2]</code>
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> arr = [2,4,5,10]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can make these trees: <code>[2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2]</code>.
</pre>

#### Constraints:

-   <code>1 <= arr.length <= 1000
-   <code>2 <= arr[i] <= 10<sup>9</sup>
-   All the values of `arr` are **unique**.
