/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (source === target) {
        return 0;
    }

    const stopToRoutes = new Map();

    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i]) {
            if (!stopToRoutes.has(stop)) {
                stopToRoutes.set(stop, []);
            }
            stopToRoutes.get(stop).push(i);
        }
    }

    const visitedRoutes = new Set();
    const queue = [[source, 0]];

    while (queue.length > 0) {
        const [currentStop, steps] = queue.shift();

        for (const routeIndex of stopToRoutes.get(currentStop) || []) {
            if (visitedRoutes.has(routeIndex)) {
                continue;
            }

            visitedRoutes.add(routeIndex);

            for (const nextStop of routes[routeIndex]) {
                if (nextStop === target) {
                    return steps + 1;
                }

                queue.push([nextStop, steps + 1]);
            }
        }
    }

    return -1;
};
