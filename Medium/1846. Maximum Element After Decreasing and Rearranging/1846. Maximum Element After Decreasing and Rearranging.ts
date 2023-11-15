function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a, b) => a - b); // Step 1

    let prev = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.min(prev + 1, arr[i]); // Step 2
        prev = arr[i];
    }

    return Math.max(...arr); // Step 3
}
