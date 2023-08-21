## [459. Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)

Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

#### Example 1:

<pre>
<strong>Input:</strong> s = "abab"
<strong>Output:</strong> true
<strong>Explanation:</strong> It is the substring "ab" twice.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> s = "aba"
<strong>Output:</strong> false
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> s = "abcabcabcabc"
<strong>Output:</strong> true
<strong>Explanation:</strong> It is the substring "abc" four times or the substring "abcabc" twice.
</pre>

#### Constraints:

-   `1 <= s.length <= 10^4`
-   `s` consists of lowercase English letters.
