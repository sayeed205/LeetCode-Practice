function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[0] - b[0]); // Sort in increasing order by starting point

    let ans = 1;
    let lastEnd = pairs[0][1];

    for (let i = 1; i < pairs.length; i++) {
        const start = pairs[i][0];
        const end = pairs[i][1];

        if (start > lastEnd) {
            ans++;
            lastEnd = end;
        } else {
            lastEnd = Math.min(lastEnd, end);
        }
    }

    return ans;
}
