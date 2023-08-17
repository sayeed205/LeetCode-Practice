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

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }

    let merged: ListNode | null;

    if (list1.val < list2.val) {
        merged = list1;
        merged.next = mergeTwoLists(list1.next, list2);
    } else {
        merged = list2;
        merged.next = mergeTwoLists(list1, list2.next);
    }

    return merged;
}
