# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head or not head.next:
            return (
                False  # No cycle in an empty list or a list with a single node.
            )

        slow = head  # The slow pointer moves one step at a time.
        fast = head  # The fast pointer moves two steps at a time.

        while fast and fast.next:
            slow = slow.next  # Move slow by one step.
            fast = fast.next.next  # Move fast by two steps.

            if slow == fast:
                return True  # If there is a cycle, slow and fast will meet.

        return False  # If fast reaches the end, there is no cycle.
