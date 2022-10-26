/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let loopLength = Math.min(...strs.map((el) => el.length));
  let result = "";

  for (let i = 0; i < loopLength; i++) {
    let char = strs[0][i];
    if (strs.every((str) => str[[i]] === char)) {
      result += char;
    } else break;
  }

  return result;
};

/** <========================= alt ans =========================> */

// const longestCommonPrefix = (strs) => {
//   if (strs.length === 0) return "";

//   return strs.reduce((prev, curr) => {
//     let i = 0;
//     while (prev[i] && curr[i] && prev[i] === curr[i]) i++;
//     return prev.slice(0, i);
//   });
// };
