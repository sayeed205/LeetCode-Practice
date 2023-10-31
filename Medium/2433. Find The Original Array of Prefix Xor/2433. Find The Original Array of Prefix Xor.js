/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    const n = pref.length;
    const arr = new Array(n);

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            arr[i] = pref[i];
        } else {
            arr[i] = pref[i] ^ pref[i - 1];
        }
    }

    return arr;
};
