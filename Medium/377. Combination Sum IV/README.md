## [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)

Given an array of distinct integers `nums` and a target integer `target`, return _the number of possible combinations that add up to_ `target`.

The test cases are generated so that the answer can fit in a **32-bit** integer.

#### Example 1:

<pre>
<strong>Input:</strong> nums = [1,2,3], target = 4
<strong>Output:</strong> 7
<strong>Explanation:</strong>
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> nums = [9], target = 3
<strong>Output:</strong> 0
</pre>

#### Constraints:

-   `1 <= nums.length <= 200`
-   `1 <= nums[i] <= 1000`
-   All the elements of `nums` are **unique**.
-   `1 <= target <= 1000`
