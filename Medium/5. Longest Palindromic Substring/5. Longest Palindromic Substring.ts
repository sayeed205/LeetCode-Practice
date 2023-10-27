function longestPalindrome(s: string): string {
    const len = s.length;

    if (len <= 1) {
        return s;
    }

    let start = 0;
    let maxLen = 1;

    const dp: boolean[][] = new Array(len)
        .fill(0)
        .map(() => new Array(len).fill(false));

    // All substrings of length 1 are palindromes.
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    // Check for palindromes of length 2.
    for (let i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLen = 2;
        }
    }

    // Check for palindromes of length greater than 2.
    for (let k = 3; k <= len; k++) {
        for (let i = 0; i <= len - k; i++) {
            const j = i + k - 1;

            if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true;

                if (k > maxLen) {
                    start = i;
                    maxLen = k;
                }
            }
        }
    }

    return s.substring(start, start + maxLen);
}
