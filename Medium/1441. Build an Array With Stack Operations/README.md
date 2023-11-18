## [1441. Build an Array With Stack Operations](https://leetcode.com/problems/build-an-array-with-stack-operations/)

You are given an integer array `target` and an integer `n`.

You have an empty stack with the two following operations:

-   **`"Push"`**: pushes an integer to the top of the stack.
-   **`"Pop"`**: removes the topmost integer of the stack.

You also have a stream of the integers in the range `[1, n]`.

Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to `target`. You should follow the following rules:

-   If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
-   If the stack is not empty, pop the integer at the top of the stack.
-   If, at any moment, the elements in the stack (from the bottom to the top) are equal to `target`, do not read new integers from the stream and do not do more operations on the stack.

Return _the stack operations needed to build_ `target` following the mentioned rules. If there are multiple valid answers, return **any of them**.

#### Example 1:

<pre>
<strong>Input:</strong> target = [1,3], n = 3
<strong>Output:</strong> ["Push","Push","Pop","Push"]
<strong>Explanation:</strong> Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Pop the integer on the top of the stack. s = [1].
Read 3 from the stream and push it to the stack. s = [1,3].
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> target = [1,2,3], n = 3
<strong>Output:</strong> ["Push","Push","Push"]
<strong>Explanation:</strong> Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Read 3 from the stream and push it to the stack. s = [1,2,3].
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> target = [1,2], n = 4
<strong>Output:</strong> ["Push","Push"]
<strong>Explanation:</strong> Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.
The answers that read integer 3 from the stream are not accepted.
</pre>

#### Constraints:

-   `1 <= target.length <= 100`
-   `1 <= n <= 100`
-   `1 <= target[i] <= n`
-   `target` is strictly increasing.