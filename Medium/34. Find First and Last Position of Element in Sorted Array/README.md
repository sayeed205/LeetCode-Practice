## [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

Given an array of integers `nums` sorted in ascending order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

#### Example 1:

<pre>
<strong>Input:</strong> nums = [5,7,7,8,8,10], target = 8
<strong>Output:</strong> [3,4]
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> nums = [5,7,7,8,8,10], target = 6
<strong>Output:</strong> [-1,-1]
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> nums = [], target = 0
<strong>Output:</strong> [-1,-1]
</pre>

#### Constraints:

-   <code>0 <= nums.length <= 10<sup>5</sup></code>
-   <code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
-   `nums` is a non-decreasing array.
-   <code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code>
