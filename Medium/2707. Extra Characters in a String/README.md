## [2707. Extra Characters in a String](https://www.acmicpc.net/problem/2707)

You are given a **0-indexed** string `s` and a `dictionary` of words dictionary. You have to break `s` into one or more **non-overlapping** substrings such that each substring is present in `dictionary`. There may be some **extra characters** in `s` which are not present in any of the substrings.

Return _the **minimum** number of extra characters left over if you break up s optimally_.

#### Example 1:

<pre>
<strong>Input:</strong> s = "leetscode", dictionary = ["leet","code","leetcode"]
<strong>Output:</strong> 1
<strong>Explanation:</strong> We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.
</pre>

#### Example 2:

<pre>
<strong>Input:</strong> s = "sayhelloworld", dictionary = ["hello","world"]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can break s in two substrings: "hello" from index 3 to 7 and "world" from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.
</pre>

#### Constraints:

-   `1 <= s.length <= 50`
-   `1 <= dictionary.length <= 50`
-   `1 <= dictionary[i].length <= 50`
-   `dictionary[i]` and `s` consist of lowercase English letters.
-   `dictionary` contains distinct words
