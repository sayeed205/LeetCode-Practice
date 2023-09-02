function minExtraChar(s: string, dictionary: string[]): number {
    const maxVal: number = s.length + 1;
    const dictionarySet: Set<string> = new Set(dictionary);

    const dp: number[] = new Array(s.length + 1).fill(maxVal);
    dp[0] = 0;

    for (let i = 1; i <= s.length; i++) {
        dp[i] = dp[i - 1] + 1;

        for (let l = 1; l <= i; l++) {
            const substring: string = s.slice(i - l, i);

            if (dictionarySet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[i - l]);
            }
        }
    }

    return dp[s.length];
}
