use std::collections::HashMap;
use std::ptr::NonNull;

// Definition for a Node.
#[derive(Debug)]
pub struct Node {
    pub val: i32,
    pub next: Option<NonNull<Node>>,
    pub random: Option<NonNull<Node>>,
}

impl Node {
    pub fn new(val: i32) -> Self {
        Node {
            val,
            next: None,
            random: None,
        }
    }
}

pub struct Solution;

impl Solution {
    pub fn copy_random_list(head: Option<NonNull<Node>>) -> Option<NonNull<Node>> {
        if head.is_none() {
            return None;
        }

        // Create a HashMap to store mappings of original nodes to their copies.
        let mut map: HashMap<NonNull<Node>, NonNull<Node>> = HashMap::new();

        // First pass: Create a copy of each node without setting random pointers.
        let mut current = head;
        while let Some(node_ptr) = current {
            let node = unsafe { node_ptr.as_ref() };
            let new_node_ptr = NonNull::new(Box::into_raw(Box::new(Node::new(node.val))));
            map.insert(node_ptr, new_node_ptr);
            current = node.next;
        }

        // Second pass: Set the next and random pointers for each copy.
        current = head;
        let mut new_head: Option<NonNull<Node>> = None;
        let mut new_current: Option<NonNull<Node>> = None;
        while let Some(node_ptr) = current {
            let node = unsafe { node_ptr.as_ref() };
            let new_node_ptr = map.get(&node_ptr).unwrap();
            let new_node = unsafe { new_node_ptr.as_mut() };

            if let Some(random_ptr) = node.random {
                new_node.random = Some(*map.get(&random_ptr).unwrap());
            }

            if let Some(next_ptr) = node.next {
                new_node.next = Some(*map.get(&next_ptr).unwrap());
            }

            if new_head.is_none() {
                new_head = Some(*new_node_ptr);
                new_current = Some(*new_node_ptr);
            } else {
                let mut new_current_node = unsafe { new_current.unwrap().as_mut() };
                new_current_node.next = Some(*new_node_ptr);
                new_current = Some(*new_node_ptr);
            }

            current = node.next;
        }

        new_head
    }
}

// At the time of submission, rust submissions is not available in LeetCode.
// it is only added and not tested in LeetCode.
