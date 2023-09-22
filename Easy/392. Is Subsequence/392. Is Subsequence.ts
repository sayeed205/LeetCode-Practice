function isSubsequence(s: string, t: string): boolean {
    let sPtr: number = 0;
    let tPtr: number = 0;

    while (sPtr < s.length && tPtr < t.length) {
        if (s.charAt(sPtr) === t.charAt(tPtr)) {
            sPtr++;
        }
        tPtr++;
    }

    return sPtr === s.length;
}
