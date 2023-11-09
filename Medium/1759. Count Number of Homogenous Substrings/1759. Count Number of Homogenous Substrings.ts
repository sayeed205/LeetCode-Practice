const MOD = 1000000007;

function countHomogenous(s: string): number {
    return s.split('').reduce(
        (acc, char, index, array) => {
            const count =
                index === 0 || char === array[index - 1] ? acc.count + 1 : 1;
            const result = (acc.result + count) % MOD;
            return { count, result };
        },
        { count: 0, result: 0 }
    ).result;
}
