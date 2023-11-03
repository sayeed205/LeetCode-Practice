function buildArray(target: number[], n: number): string[] {
    const result: string[] = [];
    let current = 1;

    for (const num of target) {
        while (current < num) {
            result.push('Push');
            result.push('Pop');
            current++;
        }

        result.push('Push');
        current++;
    }

    return result;
}
