/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    const values = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        switch (c) {
            case '(':
                values.push(')');
                break;
            case '{':
                values.push('}');
                break;
            case '[':
                values.push(']');
                break;

            default:
                if (c !== values.pop()) return false;
        }
    }
    return values.length === 0;
};
