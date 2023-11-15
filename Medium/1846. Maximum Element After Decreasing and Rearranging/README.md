## [1846. Maximum Element After Decreasing and Rearranging](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/)

You are given an array of positive integers `arr`. Perform some operations (possibly none) on `arr` so that it satisfies these conditions:

-   The value of the **first** element in `arr` must be `1`.
-   The absolute difference between any 2 adjacent elements must be **less than or equal to** `1`. In other words, `abs(arr[i] - arr[i - 1]) <= 1` for each `i` where `1 <= i < arr.length` (**0-indexed**). `abs(x)` is the absolute value of `x`.

There are 2 types of operations that you can perform any number of times:

-   **Decrease** the value of any element of `arr` to a **smaller positive integer**.
-   **Rearrange** the elements of `arr` to be in any order.

Return _the **maximum** possible value of an element in_ `arr` _after performing the operations to satisfy the conditions_.

#### Example 1:

<pre>
<strong>Input:</strong> arr = [2,2,1,2,1]   
<strong>Output:</strong> 2
<strong>Explanation:</strong>
We can satisfy the conditions by rearranging arr so it becomes [1,2,2,2,1].
The largest element in arr is 2.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> arr = [100,1,1000]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
One possible way to satisfy the conditions is by doing the following:
1. Rearrange <code>arr</code> so it becomes <code>[1,100,1000]</code>.
2. Decrease the value of the second element to 2.
3. Decrease the value of the third element to 3.
Now <code>arr = [1,2,3], which</code> satisfies the conditions.
The largest element in <code>arr is 3</code>.
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> arr = [1,2,3,4,5]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The array already satisfies the conditions, and the largest element is 5.
</pre>

#### Constraints:

-   <code>1 <= arr.length <= 10<sup>5</sup></code>
-   <code>1 <= arr[i] <= 10<sup>9</sup></code>
