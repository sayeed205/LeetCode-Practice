function removeDuplicateLetters(s: string): string {
    const stack: string[] = [];
    const seen: boolean[] = new Array(26).fill(false);
    const lastOccurrence: number[] = new Array(26).fill(0);

    // Populate lastOccurrence with the last index of each character in s.
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);

        if (!seen[ch.charCodeAt(0) - 'a'.charCodeAt(0)]) {
            // While the stack is not empty, the current character is smaller than the top of the stack,
            // and there are more occurrences of the top character later in the string, pop from the stack.
            while (stack.length > 0) {
                const top = stack[stack.length - 1];

                if (
                    ch < top &&
                    lastOccurrence[top.charCodeAt(0) - 'a'.charCodeAt(0)] > i
                ) {
                    seen[top.charCodeAt(0) - 'a'.charCodeAt(0)] = false;
                    stack.pop();
                } else {
                    break;
                }
            }

            seen[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
            stack.push(ch);
        }
    }

    // Convert the stack into a string.
    return stack.join('');
}
