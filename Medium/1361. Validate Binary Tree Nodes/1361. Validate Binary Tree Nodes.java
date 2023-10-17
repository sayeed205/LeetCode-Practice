class Solution {
    public boolean validateBinaryTreeNodes(int n, int[] leftChild, int[] rightChild) {
        // Create an array to keep track of the parent of each node.
        int[] parents = new int[n];
        Arrays.fill(parents, -1);

        for (int i = 0; i < n; i++) {
            int left = leftChild[i];
            int right = rightChild[i];

            // If a node has more than one parent or if a parent has more than one child, return false.
            if (left != -1) {
                if (parents[left] != -1) {
                    return false;
                }
                parents[left] = i;
            }
            if (right != -1) {
                if (parents[right] != -1) {
                    return false;
                }
                parents[right] = i;
            }
        }

        // Find the root node (a valid binary tree has only one root).
        int rootCount = 0;
        int root = -1;
        for (int i = 0; i < n; i++) {
            if (parents[i] == -1) {
                rootCount++;
                root = i;
            }
        }

        // There should be exactly one root in a valid binary tree.
        if (rootCount != 1) {
            return false;
        }

        // Check for cycles by performing a depth-first search (DFS) starting from the root.
        boolean[] visited = new boolean[n];
        Stack<Integer> stack = new Stack<>();
        stack.push(root);

        while (!stack.isEmpty()) {
            int node = stack.pop();
            if (visited[node]) {
                return false; // Cycle detected.
            }

            visited[node] = true;

            if (leftChild[node] != -1) {
                stack.push(leftChild[node]);
            }
            if (rightChild[node] != -1) {
                stack.push(rightChild[node]);
            }
        }

        // All nodes should be visited if it's a valid tree.
        for (boolean v : visited) {
            if (!v) {
                return false;
            }
        }

        return true;
    }
}
