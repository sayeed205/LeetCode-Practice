/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
public class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        int length = 0;
        ListNode current = head;
        
        // Calculate the length of the linked list
        while (current != null) {
            length++;
            current = current.next;
        }
        
        int partSize = length / k;
        int extraNodes = length % k;
        
        ListNode[] result = new ListNode[k];
        current = head;
        
        for (int i = 0; i < k; i++) {
            result[i] = current;
            int partLength = partSize + (extraNodes > 0 ? 1 : 0);
            
            // Move current to the end of this part
            for (int j = 1; j < partLength && current != null; j++) {
                current = current.next;
            }
            
            // If there are extra nodes, decrement extraNodes
            if (extraNodes > 0) {
                extraNodes--;
            }
            
            // Save the next node, break the link, and move to the next part
            if (current != null) {
                ListNode nextNode = current.next;
                current.next = null;
                current = nextNode;
            }
        }
        
        return result;
    }
}