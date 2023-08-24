## [68. Text Justification](https://leetcode.com/problems/text-justification/)

Given an array of `words` and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly `maxWidth` characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified and no extra space is inserted between words.

**Note:**

-   A word is defined as a character sequence consisting of non-space characters only.
-   Each word's length is guaranteed to be greater than `0` and not exceed `maxWidth`.
-   The input array `words` contains at least one word.

#### Example 1:

<pre>
<code>
<strong>Input:</strong> words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
<strong>Output:</strong>
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
</code>
</pre>

#### Example 2:

<pre>
<code>
<strong>Input:</strong> words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
<strong>Output:</strong>
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
<strong>Explanation:</strong> Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
</code>
</pre>

#### Example 3:

<pre>
<code>
<strong>Input:</strong> words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
<strong>Output:</strong>
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
</code>
</pre>

#### Constraints:

-   `1 <= words.length <= 300`
-   `1 <= words[i].length <= 20`
-   `words[i]` consists of only English letters and symbols.
-   `1 <= maxWidth <= 100`
-   `words[i].length <= maxWidth`
