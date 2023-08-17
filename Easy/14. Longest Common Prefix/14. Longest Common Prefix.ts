function longestCommonPrefix(strs: string[]): string {
    if (strs === null || strs.length === 0) {
        return '';
    }

    const firstStr: string = strs[0];
    const prefixLen: number = firstStr.length;

    for (let i = 0; i < prefixLen; i++) {
        const c: string = firstStr.charAt(i);
        for (let j = 1; j < strs.length; j++) {
            const str: string = strs[j];
            if (i >= str.length || str.charAt(i) !== c) {
                return firstStr.substring(0, i);
            }
        }
    }

    return firstStr;
}
