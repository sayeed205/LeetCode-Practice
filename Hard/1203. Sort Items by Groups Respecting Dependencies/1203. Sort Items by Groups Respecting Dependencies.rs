impl Solution {
    pub fn sort_items(n: i32, m: i32, group: Vec<i32>, before_items: Vec<Vec<i32>>) -> Vec<i32> {
        use std::collections::VecDeque;

        let n = n as usize;
        let m = m as usize;

        let group = group
            .into_iter()
            .map(|i| if i == -1 { m } else { i as usize })
            .collect::<Vec<_>>();

        let mut group_to_items = vec![vec![]; m + 1];
        let mut group_graph = vec![vec![]; m + 1];
        let mut item_graph = vec![vec![]; n];
        let mut group_incoming = vec![0; m + 1];
        let mut item_incoming = vec![0; n];

        for (i, &g) in group.iter().enumerate() {
            group_to_items[g].push(i);
        }

        for (i, items) in before_items.into_iter().enumerate() {
            for j in items {
                if group[i] != group[j as usize] {
                    group_graph[group[j as usize]].push(group[i]);
                }
                item_graph[j as usize].push(i);
                item_incoming[i] += 1;
            }
        }

        for g in &group_graph {
            for i in g {
                group_incoming[*i] += 1;
            }
        }

        let mut a = VecDeque::new();
        for (group_id, &count) in group_incoming.iter().enumerate() {
            if count == 0 && group_id != m {
                a.push_back(group_id);
            }
        }

        let mut ret = Vec::with_capacity(n);
        let mut used = vec![false; n];
        loop {
            let mut b = VecDeque::new();
            if let Some(group_id) = a.pop_front() {
                for &item_id in &group_to_items[group_id] {
                    if item_incoming[item_id] == 0 {
                        b.push_back(item_id);
                    }
                }
            }

            if b.is_empty() && a.is_empty() {
                for &item_id in &group_to_items[m] {
                    if !used[item_id] && item_incoming[item_id] == 0 {
                        used[item_id] = true;
                        b.push_back(item_id);
                    }
                }
                if b.is_empty() {
                    break;
                }
            }

            while let Some(item_id) = b.pop_front() {
                ret.push(item_id as i32);
                for &i in &item_graph[item_id] {
                    item_incoming[i] -= 1;
                    if group[i] == m {
                        continue;
                    }

                    if group[i] == group[item_id] {
                        if item_incoming[i] == 0 {
                            b.push_back(i);
                        }
                    } else {
                        group_incoming[group[i]] -= 1;
                        if group_incoming[group[i]] == 0 {
                            a.push_back(group[i]);
                        }
                    }
                }
            }
        }

        if ret.len() == n {
            ret
        } else {
            vec![]
        }
    }
}
