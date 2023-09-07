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
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        if (head == null || left == right) {
            return head;
        }
        
        ListNode dummy = new ListNode(0); // Dummy node to simplify edge cases
        dummy.next = head;
        ListNode prev = dummy;
        
        // Move `prev` to the node before the left position
        for (int i = 1; i < left; i++) {
            prev = prev.next;
        }
        
        ListNode curr = prev.next;
        
        // Reverse the nodes between left and right positions
        for (int i = left; i < right; i++) {
            ListNode next = curr.next;
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }
        
        return dummy.next;
    }
}