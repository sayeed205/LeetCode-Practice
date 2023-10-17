class Solution:
    def validateBinaryTreeNodes(
        self, n: int, leftChild: List[int], rightChild: List[int]
    ) -> bool:
        # Create a list to keep track of the parent of each node.
        parents = [-1] * n

        for i in range(n):
            left = leftChild[i]
            right = rightChild[i]

            # If a node has more than one parent or if a parent has more than one child, return False.
            if left != -1:
                if parents[left] != -1:
                    return False
                parents[left] = i
            if right != -1:
                if parents[right] != -1:
                    return False
                parents[right] = i

        # Find the root node (a valid binary tree has only one root).
        root_count = 0
        root = -1
        for i in range(n):
            if parents[i] == -1:
                root_count += 1
                root = i

        # There should be exactly one root in a valid binary tree.
        if root_count != 1:
            return False

        # Check for cycles by performing a depth-first search (DFS) starting from the root.
        visited = [False] * n
        stack = [root]

        while stack:
            node = stack.pop()
            if visited[node]:
                return False  # Cycle detected.

            visited[node] = True

            if leftChild[node] != -1:
                stack.append(leftChild[node])
            if rightChild[node] != -1:
                stack.append(rightChild[node])

        # All nodes should be visited if it's a valid tree.
        return all(visited)
