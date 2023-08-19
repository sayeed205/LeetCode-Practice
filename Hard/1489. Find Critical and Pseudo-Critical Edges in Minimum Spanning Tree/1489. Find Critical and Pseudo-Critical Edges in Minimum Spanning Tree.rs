impl Solution {
    pub fn find_critical_and_pseudo_critical_edges(n: i32, edges: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        fn find_parent(parent: &mut Vec<usize>, p: usize) -> usize {
            if parent[p] != p {
                parent[p] = find_parent(parent, parent[p]);
            }
            parent[p]
        }

        fn union(parent: &mut Vec<usize>, u: usize, v: usize) {
            let pu = find_parent(parent, u);
            let pv = find_parent(parent, v);
            parent[pu] = pv;
        }

        fn find_mst(n: usize, edges: &Vec<Vec<i32>>, block: isize, e: isize) -> i32 {
            let mut parent: Vec<usize> = (0..n).collect();
            let mut weight = 0;

            if e != -1 {
                weight += edges[e as usize][2];
                union(
                    &mut parent,
                    edges[e as usize][0] as usize,
                    edges[e as usize][1] as usize,
                );
            }

            for i in 0..edges.len() {
                if i == block as usize {
                    continue;
                }

                if find_parent(&mut parent, edges[i][0] as usize)
                    == find_parent(&mut parent, edges[i][1] as usize)
                {
                    continue;
                }

                union(&mut parent, edges[i][0] as usize, edges[i][1] as usize);
                weight += edges[i][2];
            }

            for i in 0..n {
                if find_parent(&mut parent, i) != find_parent(&mut parent, 0) {
                    return i32::MAX;
                }
            }

            weight
        }

        let mut edges_with_indices: Vec<Vec<i32>> = edges
            .iter()
            .enumerate()
            .map(|(idx, edge)| {
                let mut edge_with_idx = edge.clone();
                edge_with_idx.push(idx as i32);
                edge_with_idx
            })
            .collect();

        edges_with_indices.sort_by(|a, b| a[2].cmp(&b[2]));

        let mstwt = find_mst(n as usize, &edges_with_indices, -1, -1);

        let mut critical = Vec::new();
        let mut pseudo_critical = Vec::new();

        for i in 0..edges_with_indices.len() {
            if mstwt < find_mst(n as usize, &edges_with_indices, i as isize, -1) {
                critical.push(edges_with_indices[i][3]);
            } else if mstwt == find_mst(n as usize, &edges_with_indices, -1, i as isize) {
                pseudo_critical.push(edges_with_indices[i][3]);
            }
        }

        vec![critical, pseudo_critical]
    }
}
