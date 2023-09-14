from collections import defaultdict


class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        # Create a defaultdict to represent the graph, where each airport maps to a list of destinations.
        graph = defaultdict(list)

        # Build the graph based on the provided tickets.
        for ticket in tickets:
            from_airport, to_airport = ticket
            graph[from_airport].append(to_airport)

        # Sort the destinations lexicographically to ensure the smallest lexical order.
        for airport in graph:
            graph[airport].sort()

        # Initialize a list to store the final itinerary.
        itinerary = []

        # Define a recursive depth-first search (DFS) function to find the itinerary.
        def dfs(airport):
            # Continue visiting destinations until none are left.
            while graph[airport]:
                next_destination = graph[airport].pop(0)
                dfs(next_destination)
            # Add the airport to the itinerary in reverse order.
            itinerary.append(airport)

        # Start the DFS from the "JFK" airport, which is the beginning of the itinerary.
        dfs("JFK")

        # Reverse the itinerary to get the correct order.
        itinerary.reverse()

        return itinerary
