function garbageCollection(garbage: string[], travel: number[]): number {
    let acc = 0;
    // Calculate cumulative travel times
    const travelAccumulated: number[] = [
        0,
        ...travel.map((t) => ((acc += t), acc)),
    ];

    // Use reduce to iterate through the garbage array and accumulate counts and last indices
    const [p, m, g, lastP, lastM, lastG] = garbage.reduce(
        ([p, m, g, lastP, lastM, lastG], s, i) => {
            for (const char of s) {
                switch (char) {
                    case "P":
                        p += 1;
                        lastP = i;
                        break;
                    case "M":
                        m += 1;
                        lastM = i;
                        break;
                    case "G":
                        g += 1;
                        lastG = i;
                        break;
                }
            }
            return [p, m, g, lastP, lastM, lastG];
        },
        [0, 0, 0, 0, 0, 0]
    );

    // Calculate total time
    return (
        p +
        m +
        g +
        travelAccumulated[lastP] +
        travelAccumulated[lastM] +
        travelAccumulated[lastG]
    );
}
