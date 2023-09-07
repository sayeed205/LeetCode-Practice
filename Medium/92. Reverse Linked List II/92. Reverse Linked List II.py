# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reverseBetween(
        self, head: Optional[ListNode], left: int, right: int
    ) -> Optional[ListNode]:
        if not head or left == right:
            return head

        dummy = ListNode(0)  # Dummy node to simplify edge cases
        dummy.next = head
        prev = dummy

        # Move `prev` to the node before the left position
        for _ in range(1, left):
            prev = prev.next

        curr = prev.next

        # Reverse the nodes between left and right positions
        for _ in range(left, right):
            next_node = curr.next
            curr.next = next_node.next
            next_node.next = prev.next
            prev.next = next_node

        return dummy.next
