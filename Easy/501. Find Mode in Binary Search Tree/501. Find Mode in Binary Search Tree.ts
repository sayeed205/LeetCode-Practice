/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findMode(root: TreeNode | null): number[] {
    let currentVal = 0;
    let currentCount = 0;
    let maxCount = 0;
    const modes: number[] = [];

    function inOrderTraversal(node: TreeNode | null) {
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
                modes.length = 0; // Clear previous modes
                modes.push(currentVal);
            }

            inOrderTraversal(node.right);
        }
    }

    inOrderTraversal(root);

    return modes;
}
