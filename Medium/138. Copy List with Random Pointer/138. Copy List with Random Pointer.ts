/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    if (!head) {
        return null;
    }

    // Create a mapping of original nodes to their copies using a Map.
    const nodeMap = new Map<Node, Node>();

    // First pass: Create a copy of each node without setting random pointers.
    let current: Node | null = head;
    while (current) {
        nodeMap.set(current, new Node(current.val));
        current = current.next;
    }

    // Second pass: Set the next and random pointers for each copy.
    current = head;
    while (current) {
        if (current.next) {
            nodeMap.get(current)!.next = nodeMap.get(current.next)!;
        }
        if (current.random) {
            nodeMap.get(current)!.random = nodeMap.get(current.random)!;
        }
        current = current.next;
    }

    // Return the head of the copied linked list.
    return nodeMap.get(head)!;
}
