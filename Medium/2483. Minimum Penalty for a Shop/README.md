## [2483. Minimum Penalty for a Shop](https://leetcode.com/problems/minimum-penalty-for-a-shop/)

You are given the customer visit log of a shop represented by a **0-indexed** consisting only of characters `'N'` and `'Y'`:

-   if the <code>i<sup>th</sup></code> character is `'Y'``, it means that customers come at the <code>i<sup>th</sup></code> hour
-   whereas `'N'` indicates that no customers come at the <code>i<sup>th</sup></code> hour.

If the shop closes at the <code>j<sup>th</sup></code> hour (`0 <= j <= n`), then **penalty** is calculated as follows:

-   For every hour when the shop is open and no customers come, the penalty increases by `1`.
-   For every hour when the shop is closed and customers come, the penalty increases by `1`.

Return _the **earliest** hour at which the shop must be closed to incur a **minimum** penalty_.

**Note** that if a shop closes at the <code>j<sup>th</sup></code> hour, it means the shop is closed at the hour `j`.

#### Example 1:

<pre>
<strong>Input:</strong> customers = "YYNY"
<strong>Output:</strong> 2
<strong>Explanation:</strong> 
- Closing the shop at the <code>0<sup>th</sup></code> hour incurs in 1+1+0+1 = 3 penalty.
- Closing the shop at the <code>1<sup>st</sup></code> hour incurs in 0+1+0+1 = 2 penalty.
- Closing the shop at the <code>2<sup>nd</sup></code> hour incurs in 0+0+0+1 = 1 penalty.
- Closing the shop at the <code>3<sup>rd</sup></code> hour incurs in 0+0+1+1 = 2 penalty.
- Closing the shop at the <code>4<sup>th</sup></code> hour incurs in 0+0+1+0 = 1 penalty.
Closing the shop at <code>2<sup>nd</sup></code> or <code>4<sup>th</sup></code> hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> customers = "NNNNN"
<strong>Output:</strong> 0
<strong>Explanation:</strong> It is best to close the shop at the <code>0<sup>th</sup></code> hour as no customers arrive.
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> customers = "YYYY"
<strong>Output:</strong> 4
<strong>Explanation:</strong> It is best to close the shop at the <code>4<sup>th</sup></code> hour as customers arrive at each hour.
</pre>

#### Constraints:

-   <code>1 <= customers.length <= 10<sup>5</sup></code>
-   `customers` consists only of characters `'Y'` and `'N'`.
