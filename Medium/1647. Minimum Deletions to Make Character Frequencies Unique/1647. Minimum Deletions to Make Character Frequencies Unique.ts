function minDeletions(s: string): number {
    const freqMap: Map<string, number> = new Map();

    // Count the frequency of each character
    for (const char of s) {
        const count = freqMap.get(char) || 0;
        freqMap.set(char, count + 1);
    }

    let deletions = 0;
    const usedFrequencies: Set<number> = new Set();

    for (const count of freqMap.values()) {
        let currentCount = count;
        while (usedFrequencies.has(currentCount) && currentCount > 0) {
            currentCount--;
            deletions++;
        }

        if (currentCount > 0) {
            usedFrequencies.add(currentCount);
        }
    }

    return deletions;
}
