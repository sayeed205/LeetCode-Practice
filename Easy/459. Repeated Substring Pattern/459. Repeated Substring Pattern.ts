function repeatedSubstringPattern(s: string): boolean {
    const n = s.length;

    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const repeatCount = n / len;
            const pattern = s.slice(0, len);
            const constructed = pattern.repeat(repeatCount);
            if (constructed === s) {
                return true;
            }
        }
    }

    return false;
}
