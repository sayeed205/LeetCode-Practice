impl Solution {
    pub fn group_the_people(group_sizes: Vec<i32>) -> Vec<Vec<i32>> {
        let mut groups = vec![Vec::new(); 501]; // Initialize an array of empty vectors

        for (i, size) in group_sizes.iter().enumerate() {
            groups[*size as usize].push(i as i32); // Add the person to the corresponding group
        }

        let mut result = Vec::new();

        for (size, group) in groups.iter_mut().enumerate() {
            if !group.is_empty() {
                let mut start = 0;
                while start < group.len() {
                    let end = start + size;
                    result.push(group[start..end].to_vec());
                    start = end;
                }
            }
        }

        result
    }
}
