/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const stack = [];
    const lastOccurrence = new Array(26).fill(-1); // Initialize with -1 instead of 0.

    // Populate lastOccurrence with the last index of each character in s.
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }

    const seen = new Set(); // Use a set to track seen characters.

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (!seen.has(ch)) {
            while (
                stack.length > 0 &&
                ch < stack[stack.length - 1] &&
                i <
                    lastOccurrence[
                        stack[stack.length - 1].charCodeAt(0) -
                            'a'.charCodeAt(0)
                    ]
            ) {
                const removedChar = stack.pop();
                seen.delete(removedChar);
            }

            seen.add(ch);
            stack.push(ch);
        }
    }

    return stack.join('');
};
