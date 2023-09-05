/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) {
        return null;
    }

    // Create a mapping of original nodes to their copies using a Map.
    const nodeMap = new Map();

    // First pass: Create a copy of each node without setting random pointers.
    let current = head;
    while (current) {
        nodeMap.set(current, new Node(current.val));
        current = current.next;
    }

    // Second pass: Set the next and random pointers for each copy.
    current = head;
    while (current) {
        if (current.next) {
            nodeMap.get(current).next = nodeMap.get(current.next);
        }
        if (current.random) {
            nodeMap.get(current).random = nodeMap.get(current.random);
        }
        current = current.next;
    }

    // Return the head of the copied linked list.
    return nodeMap.get(head);
};
