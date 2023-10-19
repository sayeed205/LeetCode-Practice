function backspaceCompare(s: string, t: string): boolean {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        let backspaceCountS = 0;
        while (i >= 0 && (s[i] === '#' || backspaceCountS > 0)) {
            if (s[i] === '#') {
                backspaceCountS++;
            } else {
                backspaceCountS--;
            }
            i--;
        }

        let backspaceCountT = 0;
        while (j >= 0 && (t[j] === '#' || backspaceCountT > 0)) {
            if (t[j] === '#') {
                backspaceCountT++;
            } else {
                backspaceCountT--;
            }
            j--;
        }

        if (i < 0 || j < 0) {
            return i < 0 && j < 0; // Both strings are empty.
        }

        if (s[i] !== t[j]) {
            return false;
        }

        i--;
        j--;
    }

    return true;
}
