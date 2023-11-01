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
 * @return {number[]}
 */
var findMode = function (root) {
    let currentVal = 0;
    let currentCount = 0;
    let maxCount = 0;
    let modes = [];

    function inOrderTraversal(node) {
        if (node) {
            inOrderTraversal(node.left);

            if (node.val === currentVal) {
                currentCount++;
            } else {
                currentCount = 1;
                currentVal = node.val;
            }

            if (currentCount === maxCount) {
                modes.push(currentVal);
            } else if (currentCount > maxCount) {
                maxCount = currentCount;
                modes = [currentVal];
            }

            inOrderTraversal(node.right);
        }
    }

    inOrderTraversal(root);

    return modes;
};
