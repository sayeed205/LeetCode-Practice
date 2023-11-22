function countNicePairs(nums: number[]): number {
    const rev = (num: number): number => {
        let result = 0;
        while (num > 0) {
            result = result * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return result;
    };

    const MOD = 1_000_000_007;
    const dist = new Map<number, number>();

    for (const num of nums) {
        const offset = num - rev(num);
        dist.set(offset, (dist.get(offset) || 0) + 1);
    }

    let res: number = 0;

    for (const [, count] of dist) {
        if (count > 1) {
            res = (res + (((count * (count - 1)) / 2) % MOD)) % MOD;
        }
    }

    return res;
}
