## [2251. Number of Flowers in Full Bloom](https://leetcode.com/problems/number-of-flowers-in-full-bloom/)

You are given a **0-indexed** integer array `flowers`,where <code>flowers[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> means the i<sup>th</sup> flower will be in full bloom from start<sub>i</sub> to end<sub>i</sub> (**inclusive**). You are also given a **0-indexed** integer array `people` of size `n`, where `people[i]` is the time that the i<sup>th</sup> person will arrive to see the flowers.

Return _an integer array `answer` of size `n`, where `answer[i]` is the **number** of flowers that are in full bloom when the i<sup>th</sup> person arrives_.

#### Example 1:

![example1](https://assets.leetcode.com/uploads/2022/03/02/ex1new.jpg)

<pre>
<strong>Input:</strong> flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]
<strong>Output:</strong> [1,2,2,2]
<strong>Explanation:</strong> The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.
</pre>

#### Example 2:

![example2](https://assets.leetcode.com/uploads/2022/03/02/ex2new.jpg)

<pre>
<strong>Input:</strong> flowers = [[1,10],[3,3]], people = [3,3,2]
<strong>Output:</strong> [2,2,1]
<strong>Explanation:</strong> The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival.
</pre>

#### Constraints:

-   <code>1 <= flowers.length <= 5 \* 10<sup>4</sup></code>
-   <code>flowers[i].length == 2</code>
-   <code>1 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>9</sup></code>
-   <code>1 <= people.length <= 5 \* 10<sup>4</sup></code>
-   <code>1 <= people[i] <= 10<sup>9</sup></code>
