// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn largest_values(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut ret = vec![];
        let mut queue = vec![];
        queue.push(root);
        loop {
            let mut new_queue = vec![];
            let mut row_max = None::<i32>;
            for node in queue {
                if let Some(node) = node {
                    let mut node = node.borrow_mut();
                    new_queue.push(node.left.take());
                    new_queue.push(node.right.take());
                    if let Some(ref mut val) = row_max {
                        *val = node.val.max(*val);
                    } else {
                        row_max = Some(node.val);
                    }
                }
            }
            if let Some(val) = row_max {
                ret.push(val);
            }
            if new_queue.is_empty() {
                break;
            }

            queue = new_queue;
        }
        ret
    }
}
