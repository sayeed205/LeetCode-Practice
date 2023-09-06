// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn split_list_to_parts(head: Option<Box<ListNode>>, k: i32) -> Vec<Option<Box<ListNode>>> {
        // Count the length of the linked list
        let mut current = &head;
        let mut length = 0;
        while let Some(node) = current {
            length += 1;
            current = &node.next;
        }
        
        // Calculate the size of each part and the number of larger parts
        let part_size = length / k;
        let mut larger_parts = length % k; // Declare as mutable
        
        let mut result = Vec::new();
        let mut current = head;
        
        for _ in 0..k {
            let mut part_head = None;
            let mut part_tail = &mut part_head;
            
            for _ in 0..part_size + if larger_parts > 0 { 1 } else { 0 } {
                if let Some(mut node) = current.take() {
                    current = node.next.take();
                    *part_tail = Some(node);
                    part_tail = &mut part_tail.as_mut().unwrap().next;
                }
            }
            
            result.push(part_head);
            
            if larger_parts > 0 {
                larger_parts -= 1;
            }
        }
        
        result
    }
}