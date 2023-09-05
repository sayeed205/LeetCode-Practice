"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""


class Solution:
    def copyRandomList(self, head: "Optional[Node]") -> "Optional[Node]":
        if not head:
            return None

        # Create a dictionary to store mappings of original nodes to their copies.
        node_map = {}

        # First pass: Create a copy of each node without setting random pointers.
        current = head
        while current:
            node_map[current] = Node(current.val)
            current = current.next

        # Second pass: Set the next and random pointers for each copy.
        current = head
        while current:
            if current.next:
                node_map[current].next = node_map[current.next]
            if current.random:
                node_map[current].random = node_map[current.random]
            current = current.next

        # Return the head of the copied linked list.
        return node_map[head]
