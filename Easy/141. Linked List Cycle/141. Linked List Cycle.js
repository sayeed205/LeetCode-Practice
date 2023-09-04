/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false; // No cycle in an empty list or a list with a single node.
    }

    let slow = head; // The slow pointer moves one step at a time.
    let fast = head; // The fast pointer moves two steps at a time.

    while (fast && fast.next) {
        slow = slow.next; // Move slow by one step.
        fast = fast.next.next; // Move fast by two steps.

        if (slow === fast) {
            return true; // If there is a cycle, slow and fast will meet.
        }
    }

    return false; // If fast reaches the end, there is no cycle.
};
