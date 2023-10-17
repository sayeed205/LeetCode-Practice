/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    // Create an array to keep track of the parent of each node.
    const parents = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        const left = leftChild[i];
        const right = rightChild[i];

        // If a node has more than one parent or if a parent has more than one child, return false.
        if (left !== -1) {
            if (parents[left] !== -1) {
                return false;
            }
            parents[left] = i;
        }
        if (right !== -1) {
            if (parents[right] !== -1) {
                return false;
            }
            parents[right] = i;
        }
    }

    // Find the root node (a valid binary tree has only one root).
    let rootCount = 0;
    let root = -1;
    for (let i = 0; i < n; i++) {
        if (parents[i] === -1) {
            rootCount++;
            root = i;
        }
    }

    // There should be exactly one root in a valid binary tree.
    if (rootCount !== 1) {
        return false;
    }

    // Check for cycles by performing a DFS starting from the root.
    const visited = new Array(n).fill(false);
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        if (visited[node]) {
            return false; // Cycle detected.
        }

        visited[node] = true;

        if (leftChild[node] !== -1) {
            stack.push(leftChild[node]);
        }
        if (rightChild[node] !== -1) {
            stack.push(rightChild[node]);
        }
    }

    // All nodes should be visited if it's a valid tree.
    return visited.every(v => v);
};
