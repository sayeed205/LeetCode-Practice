/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    text = ' ' + text + ' ';
    let res = text.split('');
    let ans = [];

    let cnt = 0;
    let words = [];
    let i = 0;

    while (i < text.length - 1) {
        if (res[i] === ' ' && i !== 0) {
            cnt++;
        }

        if (res[i + 1] !== ' ') {
            let ft = i + 1;
            i++;
            while (i < text.length && res[i] !== ' ') {
                i++;
            }
            let val = text.substring(ft, i);
            words.push(val);
        } else {
            i++;
        }
    }

    let sp = 0;
    if (words.length - 1 !== 0 && text.length - 1 !== 0) {
        sp = Math.floor(cnt / (words.length - 1));
    }

    for (let word of words) {
        ans.push(word);
        ans.push(' '.repeat(sp));
    }

    let rem = 0;
    if (words.length - 1 !== 0) {
        rem = cnt % (words.length - 1);
    }
    if (words.length === 1) {
        rem = cnt;
    }

    let res1 = ans.join('').trim();
    res1 += ' '.repeat(rem);

    return res1;
};
