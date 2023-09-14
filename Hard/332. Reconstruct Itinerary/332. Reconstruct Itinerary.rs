use std::collections::HashMap;

impl Solution {
    pub fn find_itinerary(tickets: Vec<Vec<String>>) -> Vec<String> {
        let mut graph: HashMap<String, Vec<String>> = HashMap::new();

        for ticket in &tickets {
            let (src, dst) = (ticket[0].clone(), ticket[1].clone());
            graph.entry(src.clone()).or_insert(vec![]).push(dst);
        }

        for destinations in graph.values_mut() {
            destinations.sort_by(|a, b| b.cmp(a));
        }

        let mut itinerary = vec![];

        fn dfs(
            graph: &mut HashMap<String, Vec<String>>,
            airport: &str,
            itinerary: &mut Vec<String>,
        ) {
            while let Some(next) = graph.get_mut(airport).and_then(|dests| dests.pop()) {
                dfs(graph, &next, itinerary);
            }
            itinerary.push(airport.to_string());
        }

        dfs(&mut graph, "JFK", &mut itinerary);

        itinerary.reverse();

        itinerary
    }
}
