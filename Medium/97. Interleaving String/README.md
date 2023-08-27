## [97. Interleaving String](https://leetcode.com/problems/interleaving-string/)

Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an **interleaving** of `s1` and `s2`.

An **interleaving** of two strings `s` and `t` is a configuration where `s` and `t` are divided into `n` and `m`
substrings respectively, such that:

-   <code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code>
-   <code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code>
-   <code>|n - m| <= 1</code>
-   The **interleaving** is <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> or <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code>

**Note:** `a + b` is the concatenation of strings `a` and `b`.

#### Example 1:

![example1](https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg)

<pre>
<strong>Input:</strong> s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
<strong>Output:</strong> true
<strong>Explanation:</strong> One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
<strong>Output:</strong> false
<strong>Explanation:</strong> Notice how it is impossible to interleave s2 with any other string to obtain s3.
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> s1 = "", s2 = "", s3 = ""
<strong>Output:</strong> true
</pre>

#### Constraints:

-   `0 <= s1.length, s2.length <= 100`
-   `0 <= s3.length <= 200`
-   `s1`, `s2`, and `s3` consist of lowercase English letters.
