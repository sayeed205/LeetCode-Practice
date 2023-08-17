function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketMap: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (const c of s) {
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else if (c === ')' || c === ']' || c === '}') {
            if (
                stack.length === 0 ||
                stack[stack.length - 1] !== bracketMap[c]
            ) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}
