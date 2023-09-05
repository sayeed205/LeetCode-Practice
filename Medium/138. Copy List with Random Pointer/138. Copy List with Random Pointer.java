/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/
import java.util.HashMap;
import java.util.Map;

class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) {
            return null;
        }

        // Create a HashMap to store mappings of original nodes to their copies.
        Map<Node, Node> map = new HashMap<>();

        // First pass: Create a copy of each node without setting random pointers.
        Node current = head;
        while (current != null) {
            map.put(current, new Node(current.val));
            current = current.next;
        }

        // Second pass: Set the next and random pointers for each copy.
        current = head;
        while (current != null) {
            Node copy = map.get(current);
            copy.next = map.get(current.next);
            copy.random = map.get(current.random);
            current = current.next;
        }

        // Return the head of the copied linked list.
        return map.get(head);
    }
}
