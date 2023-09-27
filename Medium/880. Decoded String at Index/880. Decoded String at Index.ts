function decodeAtIndex(s: string, k: number): string {
    const lengths = new Map<number, number>();
    let length = 0;
    let lastChar = '';
    for (let i = 0; length < k; i++) {
        const num = +s[i];
        if (isNaN(num)) {
            length++;
            lastChar = s[i];
            continue;
        }
        if (!lengths.has(i)) lengths.set(i, length);
        const times = Math.min(
            num - 1,
            Math.floor((k - length) / lengths.get(i))
        );
        length += times * lengths.get(i);
        if (times < num - 1) i = -1;
    }
    return lastChar;
}
