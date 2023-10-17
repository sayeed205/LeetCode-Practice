impl Solution {
    pub fn validate_binary_tree_nodes(n: i32, left_child: Vec<i32>, right_child: Vec<i32>) -> bool {
        // Create a vector to keep track of the parent of each node.
        let mut parents = vec![-1; n as usize];

        for i in 0..n {
            let left = left_child[i as usize];
            let right = right_child[i as usize];

            // If a node has more than one parent or if a parent has more than one child, return false.
            if left != -1 {
                if parents[left as usize] != -1 {
                    return false;
                }
                parents[left as usize] = i;
            }
            if right != -1 {
                if parents[right as usize] != -1 {
                    return false;
                }
                parents[right as usize] = i;
            }
        }

        // Find the root node (a valid binary tree has only one root).
        let mut root_count = 0;
        let mut root = -1;
        for i in 0..n {
            if parents[i as usize] == -1 {
                root_count += 1;
                root = i;
            }
        }

        // There should be exactly one root in a valid binary tree.
        if root_count != 1 {
            return false;
        }

        // Check for cycles by performing a DFS starting from the root.
        let mut visited = vec![false; n as usize];
        let mut stack = vec![root];

        while let Some(node) = stack.pop() {
            if visited[node as usize] {
                return false; // Cycle detected.
            }

            visited[node as usize] = true;

            if left_child[node as usize] != -1 {
                stack.push(left_child[node as usize]);
            }
            if right_child[node as usize] != -1 {
                stack.push(right_child[node as usize]);
            }
        }

        // All nodes should be visited if it's a valid tree.
        visited.iter().all(|&v| v)
    }
}
