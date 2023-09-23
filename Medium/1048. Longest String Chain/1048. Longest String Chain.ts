function longestStrChain(words: string[]): number {
    // Sort the words by their length in ascending order.
    words.sort((a, b) => a.length - b.length);

    // Create a map to store the length of the longest chain for each word.
    const dp = new Map<string, number>();
    let maxChainLength = 1;

    for (const word of words) {
        let currentChainLength = 1;

        // Generate all possible predecessors of the current word by removing one character.
        for (let i = 0; i < word.length; i++) {
            const predecessor = word.slice(0, i) + word.slice(i + 1);

            // Check if the predecessor exists in the map and update the chain length.
            if (dp.has(predecessor)) {
                currentChainLength = Math.max(
                    currentChainLength,
                    dp.get(predecessor)! + 1
                );
            }
        }

        // Update the maximum chain length for the current word.
        dp.set(word, currentChainLength);
        maxChainLength = Math.max(maxChainLength, currentChainLength);
    }

    return maxChainLength;
}
