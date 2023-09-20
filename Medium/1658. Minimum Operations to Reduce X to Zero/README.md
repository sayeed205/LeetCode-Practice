## [1658. Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)

You are given an integer array `nums` and an integer `x`. In one operation, you can either remove the leftmost or the rightmost element from the array `nums` and subtract its value from `x`. Note that this **modifies** the array for future operations.

Return _the **minimum number** of operations to reduce_ `x` \*to **exactly\*** `0` _if it's possible\*\*, otherwise, return_ `-1`.

#### Example 1:

<pre>
<strong>Input:</strong> nums = [1,1,4,2,3], x = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> The optimal solution is to remove the last two elements to reduce x to zero.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> nums = [5,6,7,8,9], x = 4
<strong>Output:</strong> -1
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> nums = [3,2,20,1,1,3], x = 10
<strong>Output:</strong> 5
<strong>Explanation:</strong> The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
</pre>

#### Constraints:

-   <code>1 <= nums.length <= 10<sup>5</sup></code>
-   <code>1 <= nums[i] <= 10<sup>4</sup></code>
-   <code>1 <= x <= 10<sup>9</sup></code>
