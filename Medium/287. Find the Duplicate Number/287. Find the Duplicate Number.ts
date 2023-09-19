function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Find the intersection point of the two pointers
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    // Phase 2: Find the entrance to the cycle
    let ptr1 = nums[0];
    let ptr2 = slow;

    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
}
