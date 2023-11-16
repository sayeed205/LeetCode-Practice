function findDifferentBinaryString(nums: string[]): string {
    let result = "";

    for (let i = 0; i < nums.length; i++) {
        // If the current character at position i is '0', append '1'; otherwise, append '0'.
        result += nums[i][i] === "0" ? "1" : "0";
    }

    return result;
}
