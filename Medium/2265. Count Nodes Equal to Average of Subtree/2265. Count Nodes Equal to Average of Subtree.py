# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        result = [0]  # Using a list to store the result to make it mutable

        def traverse(node):
            if not node:
                return (0, 0)

            left_sum, left_count = traverse(node.left)
            right_sum, right_count = traverse(node.right)

            curr_sum = node.val + left_sum + right_sum
            curr_count = 1 + left_count + right_count

            if curr_sum // curr_count == node.val:
                result[0] += 1

            return (curr_sum, curr_count)

        traverse(root)

        return result[0]
