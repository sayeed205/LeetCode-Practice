## [1512. Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)

Given an array of integers `nums`, return \*the number of **good pairs\***.

A pair `(i, j)` is called _good_ if `nums[i]` == `nums[j]` and `i` < `j`.

#### Example 1:

<pre>
<strong>Input:</strong> nums = [1,2,3,1,1,3]
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> nums = [1,1,1,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong> Each pair in the array are good.
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 0
</pre>

#### Constraints:

-   `1 <= nums.length <= 100`
-   `1 <= nums[i] <= 100`
