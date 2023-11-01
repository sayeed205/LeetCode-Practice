/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private List<Integer> modes = new ArrayList<>();
    private int currentVal = 0;
    private int currentCount = 0;
    private int maxCount = 0;

    public int[] findMode(TreeNode root) {
        inOrderTraversal(root);

        int[] result = new int[modes.size()];
        for (int i = 0; i < modes.size(); i++) {
            result[i] = modes.get(i);
        }
        return result;
    }

    private void inOrderTraversal(TreeNode node) {
        if (node == null) {
            return;
        }

        inOrderTraversal(node.left);

        if (node.val == currentVal) {
            currentCount++;
        } else {
            currentCount = 1;
            currentVal = node.val;
        }

        if (currentCount == maxCount) {
            modes.add(currentVal);
        } else if (currentCount > maxCount) {
            maxCount = currentCount;
            modes.clear();
            modes.add(currentVal);
        }

        inOrderTraversal(node.right);
    }
}