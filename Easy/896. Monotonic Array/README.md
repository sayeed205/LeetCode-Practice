## [896. Monotonic Array](https://leetcode.com/problems/monotonic-array/)

An array is `monotonic` if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` _if the given array is monotonic, or_ `false` _otherwise_.

#### Example 1:

<pre>
<strong>Input:</strong> nums = [1,2,2,3]
<strong>Output:</strong> true
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> nums = [6,5,4,4]
<strong>Output:</strong> true
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> nums = [1,3,2]
<strong>Output:</strong> false
</pre>

#### Constraints:

-   <code>1 <= nums.length <= 10<sup>5</sup></code>
-   <code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code>
