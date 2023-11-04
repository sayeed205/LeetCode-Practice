function getLastMoment(n: number, left: number[], right: number[]): number {
    const leftTime = Math.max(...left, 0);
    const rightTime = Math.max(...right.map(position => n - position), 0);
    return Math.max(leftTime, rightTime);
}
