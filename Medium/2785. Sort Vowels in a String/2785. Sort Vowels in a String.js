/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    let vowelSorted = [];

    for (let char of s) {
        if ("aeiouAEIOU".includes(char)) {
            vowelSorted.push(char);
        }
    }

    vowelSorted.sort().reverse();

    let res = "";
    for (let char of s) {
        if ("aeiouAEIOU".includes(char)) {
            res += vowelSorted.pop();
        } else {
            res += char;
        }
    }

    return res;
};
