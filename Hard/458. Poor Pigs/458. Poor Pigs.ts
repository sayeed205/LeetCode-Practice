function poorPigs(n: number, m: number, p: number): number {
    return Math.ceil(Math.log10(n) / Math.log10(p / m + 1));
}
