function numBusesToDestination(
    routes: number[][],
    source: number,
    target: number
): number {
    if (source === target) {
        return 0;
    }

    const stopToRoutes: Map<number, number[]> = new Map();

    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i]) {
            if (!stopToRoutes.has(stop)) {
                stopToRoutes.set(stop, []);
            }
            stopToRoutes.get(stop)!.push(i);
        }
    }

    const visitedRoutes: Set<number> = new Set();
    const queue: [number, number][] = [[source, 0]];

    while (queue.length > 0) {
        const [currentStop, steps] = queue.shift()!;

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
}
