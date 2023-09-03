## [1577. Number of Ways Where Square of Number Is Equal to Product of Two Numbers](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/)

Given two arrays of integers `nums1` and `nums2`, return the number of triplets formed (type 1 and type 2) under the following rules:

-   Type 1: Triplet (i, j, k) if `nums1[i]2 == nums2[j] * nums2[k]` where `0 <= i < nums1.length` and `0 <= j < k < nums2.length`.
-   Type 2: Triplet (i, j, k) if `nums2[i]2 == nums1[j] * nums1[k]` where `0 <= i < nums2.length` and `0 <= j < k < nums1.length`.

#### Example 1:

<pre>
<strong>Input:</strong> nums1 = [7,4], nums2 = [5,2,8,9]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Type 1: (1,1,2), nums1[1]^2 = nums2[1] * nums2[2]. (4^2 = 2 * 8).
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> nums1 = [1,1], nums2 = [1,1,1]
<strong>Output:</strong> 9
<strong>Explanation:</strong> All Triplets are valid, because 1^2 = 1 * 1.
Type 1: (0,0,1), (0,0,2), (0,1,2), (1,0,1), (1,0,2), (1,1,2).  nums1[i]^2 = nums2[j] * nums2[k].
Type 2: (0,0,1), (1,0,1), (2,0,1). nums2[i]^2 = nums1[j] * nums1[k].
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> nums1 = [7,7,8,3], nums2 = [1,2,9,7]
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 2 valid triplets.
Type 1: (3,0,2).  nums1[3]^2 = nums2[0] * nums2[2].
Type 2: (3,0,1).  nums2[3]^2 = nums1[0] * nums1[1].
</pre>

#### Constraints:

-   `1 <= nums1.length, nums2.length <= 1000`
-   <code>1 <= nums1[i], nums2[i] <= 10<sup>5</sup></code>
