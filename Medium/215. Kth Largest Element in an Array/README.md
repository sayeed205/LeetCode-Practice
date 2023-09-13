## [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Given an integer array `nums` and an integer `k`, return _the_ <code>k<sup>th</sup></code> _largest element in the array_.

Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.

Can you solve it without sorting?

#### Example 1:

<pre><code><strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2
<strong>Output:</strong> 5
</code></pre>

#### Example 2:

<pre><code><strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4
<strong>Output:</strong> 4
</code></pre>

#### Constraints:

-   <code>1 <= k <= nums.length <= 10<sup>5</sup></code>
-   <code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
