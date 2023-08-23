function reorganizeString(s: string): string {
    const charCount: number[] = new Array(26).fill(0);
    for (const c of s) {
        charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const maxHeap: [number, string][] = [];
    for (let i = 0; i < 26; i++) {
        if (charCount[i] > 0) {
            maxHeap.push([
                charCount[i],
                String.fromCharCode('a'.charCodeAt(0) + i),
            ]);
        }
    }
    maxHeap.sort((a, b) => b[0] - a[0]);

    const result: string[] = [];
    while (maxHeap.length > 0) {
        const [count1, char1] = maxHeap.shift()!;
        const nextPair = maxHeap.shift();
        if (nextPair) {
            const [count2, char2] = nextPair;
            result.push(char1);
            result.push(char2);
            if (count1 > 1) {
                maxHeap.push([count1 - 1, char1]);
            }
            if (count2 > 1) {
                maxHeap.push([count2 - 1, char2]);
            }
            maxHeap.sort((a, b) => b[0] - a[0]);
        } else {
            if (count1 > 1) {
                return ''; // Not possible to rearrange
            } else {
                result.push(char1);
            }
        }
    }

    return result.join('');
}
