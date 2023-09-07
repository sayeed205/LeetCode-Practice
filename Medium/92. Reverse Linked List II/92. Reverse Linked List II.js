/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

var reverseBetween = function (head, left, right) {
    if (!head || left === right) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let before = dummy;

    // Move `before` to the node before the left position
    for (let i = 1; i < left; i++) {
        before = before.next;
    }

    let prev = before.next;
    let curr = prev;

    for (let i = left; i < right; i++) {
        let next = curr.next;
        curr.next = next.next;
        next.next = prev;
        prev = next;
    }

    before.next = prev;
    curr.next = curr.next; // To handle the case where right == length

    return dummy.next;
};
