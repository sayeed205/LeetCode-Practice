/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    // Calculate the length of the linked list
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    // Calculate the size of each part and the number of extra nodes
    const partSize = Math.floor(length / k);
    const extraNodes = length % k;

    const result = [];
    current = head;

    for (let i = 0; i < k; i++) {
        result.push(current);
        const partLength = partSize + (i < extraNodes ? 1 : 0);

        // Move current to the end of this part
        for (let j = 1; j < partLength; j++) {
            current = current.next;
        }

        if (current) {
            // Save the next node, break the link, and move to the next part
            const nextNode = current.next;
            current.next = null;
            current = nextNode;
        }
    }

    return result;
};
