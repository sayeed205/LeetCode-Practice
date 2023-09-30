## [456. 132 Pattern](https://leetcode.com/problems/132-pattern/)

Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

Return `true` _if there is a **132 pattern** in_ `nums`_, otherwise, return_ `false`.

#### Example 1:

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no 132 pattern in the sequence.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> nums = [3,1,4,2]
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a 132 pattern in the sequence: [1, 4, 2].
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> nums = [-1,3,2,0]
<strong>Output:</strong> true
<strong>Explanation:</strong> There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
</pre>

#### Constraints:

-   `n == nums.length`
-   <code>1 <= n <= 2 \* 10<sup>5</sup></code>
-   <code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
