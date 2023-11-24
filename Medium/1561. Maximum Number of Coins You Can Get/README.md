## [1561. Maximum Number of Coins You Can Get](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/)

There are `3n` piles of coins of varying size, you and your friends will take piles of coins as follows:

-   In each step, you will choose **any** `3` piles of coins (not necessarily consecutive).
-   Of your choice, Alice will pick the pile with the maximum number of coins.
-   You will pick the next pile with maximum number of coins.
-   Your friend Bob will pick the last pile.
-   Repeat until there are no more piles of coins.

Given an array of integers `piles` where `piles[i]` is the number of coins in the <code>i<sup>th</sup></code> pile.

Return the maximum number of coins which you can have.

#### Example 1:

<pre>
<strong>Input:</strong> piles = [2,4,1,2,7,8]
<strong>Output:</strong> 9
<strong>Explanation:</strong> Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with <strong>7</strong> coins and Bob the last one.
Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with <strong>2</strong> coins and Bob the last one.
The maximum number of coins which you can have are: 7 + 2 = <strong>9</strong>.
On the other hand if we choose this arrangement (1, <strong>2</strong>, 8), (2, <strong>4</strong>, 7) you only get 2 + 4 = <strong>6</strong> coins which is not optimal.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> piles = [2,4,5]
<strong>Output:</strong> 4
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> piles = [9,8,7,6,5,1,2,3,4]
<strong>Output:</strong> 18
</pre>

#### Constraints:

-   <code>3 <= piles.length <= 10<sup>5</sup></code>
-   <code>piles.length % 3 == 0</code>
-   <code>1 <= piles[i] <= 10<sup>4</sup></code>
