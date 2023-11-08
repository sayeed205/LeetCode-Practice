function isReachableAtTime(
    sx: number,
    sy: number,
    fx: number,
    fy: number,
    t: number
): boolean {
    const dx = Math.abs(sx - fx);
    const dy = Math.abs(sy - fy);

    if (dx === 0 && dy === 0) {
        return t !== 1;
    } else {
        return Math.max(dx, dy) <= t;
    }
}
