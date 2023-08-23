/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const charCount = new Array(26).fill(0);

    for (const char of s) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        charCount[index]++;
    }

    const maxCount = Math.max(...charCount);
    if (maxCount > Math.floor((s.length + 1) / 2)) {
        return '';
    }

    const result = new Array(s.length);
    let evenIndex = 0,
        oddIndex = 1;
    const halfLength = Math.floor(s.length / 2);

    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode('a'.charCodeAt(0) + i);

        while (
            charCount[i] > 0 &&
            charCount[i] <= halfLength &&
            oddIndex < s.length
        ) {
            result[oddIndex] = char;
            charCount[i]--;
            oddIndex += 2;
        }

        while (charCount[i] > 0) {
            result[evenIndex] = char;
            charCount[i]--;
            evenIndex += 2;
        }
    }

    return result.join('');
};
