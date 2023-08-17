/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    if (strs.length === 0) return '';

    return strs.reduce((prev, curr) => {
        let i = 0;
        while (prev[i] && curr[i] && prev[i] === curr[i]) i++;
        return prev.slice(0, i);
    });
};

let x = ['flower', 'flow', 'flight'];
