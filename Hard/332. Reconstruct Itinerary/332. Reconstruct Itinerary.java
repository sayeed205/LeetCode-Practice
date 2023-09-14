import java.util.*;

class Solution {
    public List<String> findItinerary(List<List<String>> tickets) {
        // Create a HashMap to represent the graph, where each airport maps to a PriorityQueue of destinations.
        Map<String, PriorityQueue<String>> graph = new HashMap<>();
        
        // Build the graph based on the provided tickets.
        for (List<String> ticket : tickets) {
            String from = ticket.get(0);
            String to = ticket.get(1);
            graph.computeIfAbsent(from, k -> new PriorityQueue<>()).offer(to);
        }
        
        // Initialize a list to store the final itinerary.
        List<String> itinerary = new ArrayList<>();
        
        // Define a recursive depth-first search (DFS) function to find the itinerary.
        dfs("JFK", graph, itinerary);
        
        // Reverse the itinerary to get the correct order.
        Collections.reverse(itinerary);
        
        return itinerary;
    }
    
    private void dfs(String airport, Map<String, PriorityQueue<String>> graph, List<String> itinerary) {
        // Check if the current airport has destinations.
        if (graph.containsKey(airport)) {
            PriorityQueue<String> destinations = graph.get(airport);
            while (!destinations.isEmpty()) {
                // Recursively visit the next airport.
                dfs(destinations.poll(), graph, itinerary);
            }
        }
        // Add the current airport to the itinerary.
        itinerary.add(airport);
    }
}
