/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false; // No cycle in an empty list or a list with a single node.
        }
        
        ListNode slow = head; // The slow pointer moves one step at a time.
        ListNode fast = head; // The fast pointer moves two steps at a time.
        
        while (fast != null && fast.next != null) {
            slow = slow.next; // Move slow by one step.
            fast = fast.next.next; // Move fast by two steps.
            
            if (slow == fast) {
                return true; // If there is a cycle, slow and fast will meet.
            }
        }
        
        return false; // If fast reaches the end, there is no cycle.
    }
}




