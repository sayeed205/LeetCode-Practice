/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];

    const result = [];
    let queue = [root];

    while (queue.length > 0) {
        let rowMax = Number.MIN_SAFE_INTEGER;
        const rowSize = queue.length;

        for (let i = 0; i < rowSize; i++) {
            const node = queue.shift();
            rowMax = Math.max(rowMax, node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(rowMax);
    }

    return result;
};
