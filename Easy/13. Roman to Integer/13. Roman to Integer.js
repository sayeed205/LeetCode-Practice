/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let result = 0;
  symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    s[i + 1] && symbols[s[i]] < symbols[s[i + 1]]
      ? (result -= symbols[s[i]])
      : (result += symbols[s[i]]);
  }
  return result;
};
