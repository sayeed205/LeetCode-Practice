# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque


class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        result = []
        queue = deque()
        queue.append(root)

        while queue:
            row_max = float("-inf")  # Initialize with negative infinity
            row_size = len(queue)

            for _ in range(row_size):
                node = queue.popleft()
                row_max = max(row_max, node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            result.append(row_max)

        return result
