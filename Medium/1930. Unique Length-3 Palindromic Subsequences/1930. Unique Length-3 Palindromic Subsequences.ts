function countPalindromicSubsequence(s: string): number {
    const charToIndex = (char: string): number =>
        char.charCodeAt(0) - "a".charCodeAt(0);

    const sBytes: number[] = Array.from(s, charToIndex);
    const left: number[] = new Array(26).fill(Number.MAX_SAFE_INTEGER);
    const right: number[] = new Array(26).fill(0);
    let ret = 0;

    for (let i = 0; i < s.length; i++) {
        const j = sBytes[i];
        left[j] = Math.min(left[j], i);
        right[j] = i;
    }

    const used: boolean[] = new Array(26).fill(false);
    for (let i = 0; i < 26; i++) {
        ret += countUniqueBetween(sBytes, left[i] + 1, right[i], used);
    }

    return ret;
}

function countUniqueBetween(
    s: number[],
    start: number,
    end: number,
    used: boolean[]
): number {
    let count = 0;
    for (let j = start; j < end; j++) {
        const idx = s[j];
        if (!used[idx]) {
            used[idx] = true;
            count += 1;
        }
    }
    used.fill(false);
    return count;
}
