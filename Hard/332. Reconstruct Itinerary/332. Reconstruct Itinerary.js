/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    // Create a graph represented as an adjacency list.
    const graph = {};

    // Build the graph based on the provided tickets.
    for (const [from, to] of tickets) {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }

    // Sort the destinations lexicographically to ensure the smallest lexical order.
    for (const airport in graph) {
        graph[airport].sort();
    }

    // Initialize a stack for DFS and an array to store the final itinerary.
    const stack = ['JFK'];
    const itinerary = [];

    // Perform DFS to find the itinerary.
    while (stack.length > 0) {
        const currentAirport = stack[stack.length - 1];
        const destinations = graph[currentAirport];

        if (destinations && destinations.length > 0) {
            stack.push(destinations.shift());
        } else {
            // If no more destinations, add the current airport to the itinerary.
            itinerary.unshift(stack.pop());
        }
    }

    return itinerary;
};
