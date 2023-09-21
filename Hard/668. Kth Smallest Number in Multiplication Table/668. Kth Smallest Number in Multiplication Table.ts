function findKthNumber(m: number, n: number, k: number): number {
    let left: number = 1;
    let right: number = m * n;

    while (left < right) {
        const mid: number = left + Math.floor((right - left) / 2);

        // Count the number of elements less than or equal to mid in the multiplication table
        const count: number = countElements(m, n, mid);

        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

function countElements(m: number, n: number, target: number): number {
    let count: number = 0;
    for (let i: number = 1; i <= m; i++) {
        count += Math.min(Math.floor(target / i), n);
    }
    return count;
}
