## [119. Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/)

Given an integer `rowIndex`, return the <code>rowIndex<sup>th</sup></code>(**0-indexed**) row of the **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![Pascal's triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

#### Example 1:

<pre>
<strong>Input:</strong> rowIndex = 3
<strong>Output:</strong> [1,3,3,1]
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> rowIndex = 0
<strong>Output:</strong> [1]
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> rowIndex = 1
<strong>Output:</strong> [1,1]
</pre>

#### Constraints:

-   <code>0 <= rowIndex <= 33</code>

**Follow up:** Could you optimize your algorithm to use only <code>O(rowIndex)</code> extra space?
