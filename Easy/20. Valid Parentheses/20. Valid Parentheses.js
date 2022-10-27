/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  while (s.length > 0) {
    let L = s.length;
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
    if (L === s.length) return false;
  }
  return true;
};

// <======================== alt ans ========================>
// const isValid = (s) => {
//   const values = [];
//   for (let i = 0; i < s.length; i++) {
//     let c = s[i];
//     switch (c) {
//       case "(":
//         values.push(")");
//         break;
//       case "{":
//         values.push("}");
//         break;
//       case "[":
//         values.push("]");
//         break;

//       default:
//         if (c !== values.pop()) return false;
//     }
//   }
//   return values.length === 0;
// };
