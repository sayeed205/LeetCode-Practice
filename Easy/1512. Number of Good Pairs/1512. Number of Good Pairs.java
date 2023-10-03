class Solution {
    public int numIdenticalPairs(int[] nums) {
        int[] countArray = new int[101]; // Assuming nums[i] <= 100
        int goodPairs = 0;

        for (int num : nums) {
            goodPairs += countArray[num];
            countArray[num]++;
        }

        return goodPairs;
    }
}
