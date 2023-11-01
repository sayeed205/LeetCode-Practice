from collections import Counter

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        def in_order_traversal(node):
            if not node:
                return []

            # Recursively traverse the left subtree
            left_vals = in_order_traversal(node.left)

            # Append the current node's value
            left_vals.append(node.val)

            # Recursively traverse the right subtree
            right_vals = in_order_traversal(node.right)

            return left_vals + right_vals

        # Perform an in-order traversal to get all values in sorted order
        values = in_order_traversal(root)

        # Use Counter to count the occurrences of each value
        value_counts = Counter(values)

        if not value_counts:
            return []

        # Find the maximum count
        max_count = max(value_counts.values())

        # Find the values that have the maximum count
        modes = [
            value for value, count in value_counts.items() if count == max_count
        ]

        return modes
