/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.next = (next === undefined ? null : next);
 *     }
 * }
 */

function splitListToParts(
    head: ListNode | null,
    k: number
): Array<ListNode | null> {
    // Calculate the length of the linked list
    let length = 0;
    let current: ListNode | null = head;
    while (current !== null) {
        length++;
        current = current.next;
    }

    // Calculate the size of each part and the number of extra nodes
    const partSize = Math.floor(length / k);
    const extraNodes = length % k;

    const result: Array<ListNode | null> = [];
    current = head;

    for (let i = 0; i < k; i++) {
        result.push(current);
        const partLength = partSize + (i < extraNodes ? 1 : 0);

        // Move current to the end of this part
        for (let j = 1; j < partLength && current !== null; j++) {
            current = current.next;
        }

        if (current !== null) {
            // Save the next node, break the link, and move to the next part
            const nextNode: ListNode | null = current.next;
            current.next = null;
            current = nextNode;
        }
    }

    return result;
}
