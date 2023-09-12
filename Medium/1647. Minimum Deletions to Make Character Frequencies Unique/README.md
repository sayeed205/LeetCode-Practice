## [1647. Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)

A string `s` is called **good** if there are no two different characters in `s` that have the same **frequency**.

Given a string `s`, return _the **minimum** number of characters you need to delete to make_ `s` **_good_**.

The **frequency** of a character in a string is the number of times it appears in the string. For example, in the string `"aab"`, the **frequency** of `'a'` is `2`, while the **frequency** of `'b'` is `1`.

#### Example 1:

<pre>
<strong>Input:</strong> s = "aab"
<strong>Output:</strong> 0
<strong>Explanation:</strong> <code>s</code> is already good.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> s = "aaabbbcc"
<strong>Output:</strong> 2
<strong>Explanation:</strong> You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> s = "ceabaacb"
<strong>Output:</strong> 2
<strong>Explanation:</strong> You can delete both 'c's resulting in the good string "eabaab".
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).
</pre>

#### Constraints:

-   <code>1 <= s.length <= 10<sup>5</sup></code>
-   `s` contains only lowercase English letters.
