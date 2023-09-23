/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    // Sort the words by their length in ascending order.
    words.sort((a, b) => a.length - b.length);

    // Create an object to store the length of the longest chain for each word.
    const dp = {};
    let maxChainLength = 1;

    for (const word of words) {
        dp[word] = 1;

        // Generate all possible predecessors of the current word by removing one character.
        for (let i = 0; i < word.length; i++) {
            const predecessor = word.slice(0, i) + word.slice(i + 1);

            // Check if the predecessor exists in the object and update the chain length.
            if (dp[predecessor] !== undefined) {
                dp[word] = Math.max(dp[word], dp[predecessor] + 1);
            }
        }

        // Update the maximum chain length for the current word.
        maxChainLength = Math.max(maxChainLength, dp[word]);
    }

    return maxChainLength;
};
