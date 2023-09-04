/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false; // No cycle in an empty list or a list with a single node.
    }

    let slow: ListNode | null = head; // The slow pointer moves one step at a time.
    let fast: ListNode | null = head; // The fast pointer moves two steps at a time.

    while (fast && fast.next) {
        slow = slow!.next; // Move slow by one step.
        fast = fast!.next!.next; // Move fast by two steps.

        if (slow === fast) {
            return true; // If there is a cycle, slow and fast will meet.
        }
    }

    return false; // If fast reaches the end, there is no cycle.
}
