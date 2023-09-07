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

function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
): ListNode | null {
    if (!head || left === right) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let before: ListNode | null = dummy;

    // Move `before` to the node before the left position
    for (let i = 1; i < left; i++) {
        before = before!.next;
    }

    let prev: ListNode | null = before!.next;
    let curr: ListNode | null = prev;

    for (let i = left; i < right; i++) {
        let next: ListNode | null = curr!.next;
        curr!.next = next!.next;
        next!.next = prev;
        prev = next;
    }

    before!.next = prev;
    curr!.next = curr!.next; // To handle the case where right == length

    return dummy.next;
}
