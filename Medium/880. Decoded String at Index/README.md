## [880. Decoded String at Index](https://leetcode.com/problems/decoded-string-at-index/)

You are given an encoded string `s`. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:

-   If the character read is a letter, that letter is written onto the tape.
-   If the character read is a digit `d`, the entire current tape is repeatedly written `d-1` more times in total.

Given an integer `k`, return \*the k<sup>th</sup> letter **(1-indexed)\*** in the decoded string.

#### Example 1:

<pre>
<strong>Input:</strong> s = "leet2code3", k = 10
<strong>Output:</strong> "o"
<strong>Explanation:</strong>
The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10<sup>th</sup> letter in the string is "o".
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> s = "ha22", k = 5
<strong>Output:</strong> "h"
<strong>Explanation:</strong>
The decoded string is "hahahaha". The 5<sup>th</sup> letter is "h".
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> s = "a2345678999999999999999", k = 1
<strong>Output:</strong> "a"
<strong>Explanation:</strong>
The decoded string is "a" repeated 8301530446056247680 times. The 1<sup>st</sup> letter is "a".
</pre>

#### Constraints:

-   `2 <= s.length <= 100`
-   `s` consists of lowercase English letters and digits `2` through `9`.
-   `s` starts with a letter.
-   <code>1 <= k <= 10<sup>9</sup></code>
