# [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)

Given two strings `s` and `t`, return `true` _if they are equal when both are typed into empty text editors. `'#'` means a backspace character_.

Note that after backspacing an empty text, the text will continue empty.

#### Example 1:

<pre>
<strong>Input:</strong> s = "ab#c", t = "ad#c"
<strong>Output:</strong> true
<strong>Explanation:</strong> Both s and t become "ac".
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> s = "ab##", t = "c#d#"
<strong>Output:</strong> true
<strong>Explanation:</strong> Both s and t become "".
</pre>

#### Example 3:

<pre>
<strong>Input:</strong> s = "a##c", t = "#a#c"
<strong>Output:</strong> true
<strong>Explanation:</strong> Both s and t become "c".
</pre>

#### Constraints:

-   `1 <= s.length, t.length <= 200`
-   `s` and `t` only contain lowercase letters and `'#'` characters.
