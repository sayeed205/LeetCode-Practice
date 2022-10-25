/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  return x.toString() === x.toString().split("").reverse().join("");
};
