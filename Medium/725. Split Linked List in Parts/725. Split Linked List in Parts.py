# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution(object):
    def splitListToParts(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: List[ListNode]
        """
        # Calculate the length of the linked list
        length = 0
        current = head
        while current:
            length += 1
            current = current.next

        # Calculate the size of each part and the number of extra nodes
        part_size = length // k
        extra_nodes = length % k

        result = []
        current = head

        for i in range(k):
            result.append(current)
            part_length = part_size + 1 if i < extra_nodes else part_size

            # Move current to the end of this part
            for j in range(part_length - 1):
                current = current.next

            if current:
                # Save the next node, break the link, and move to the next part
                next_node = current.next
                current.next = None
                current = next_node

        return result
