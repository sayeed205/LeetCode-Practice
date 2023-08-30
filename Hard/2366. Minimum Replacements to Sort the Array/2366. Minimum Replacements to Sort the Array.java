class Solution {
    public long minimumReplacement(int[] nums) {
        long operations = 0;
        int prevBound = nums[nums.length - 1];
        
        for (int i = nums.length - 2; i >= 0; i--) {
            int num = nums[i];
            int noOfTimes = (num + prevBound - 1) / prevBound;
            operations += noOfTimes - 1;
            prevBound = num / noOfTimes;
        }
        
        return operations;
    }
}
