// Definition for singly-linked list.
#[derive(Debug, PartialEq, Eq)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

impl Solution {
    pub fn has_cycle(head: Option<Box<ListNode>>) -> bool {
        let (mut slow, mut fast) = (head.as_ref(), head.as_ref());

        while let (Some(node1), Some(node2)) = (slow, fast) {
            slow = node1.next.as_ref();
            fast = node2.next.as_ref().and_then(|n| n.next.as_ref());

            if slow == fast {
                return true; // If there is a cycle, slow and fast will meet.
            }
        }

        false // If fast reaches the end, there is no cycle.
    }
}

// [warn] rust section is not available for this problem yet so this code is not tested.
