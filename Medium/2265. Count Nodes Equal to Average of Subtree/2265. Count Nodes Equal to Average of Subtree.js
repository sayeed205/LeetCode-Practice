/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let result = 0;

    function traverse(node) {
        if (!node) {
            return { sum: 0, count: 0 };
        }

        const left = traverse(node.left);
        const right = traverse(node.right);

        const sum = node.val + left.sum + right.sum;
        const count = 1 + left.count + right.count;

        if (Math.floor(sum / count) === node.val) {
            result++;
        }

        return { sum, count };
    }

    traverse(root);

    return result;
};
