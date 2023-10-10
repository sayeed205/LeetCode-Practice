class Solution {
    public int minOperations(int[] nums) {
        int n = nums.length;
        int minOperations = n;
        Set<Integer> uniqueNums = new HashSet<>();
        List<Integer> sortedUniqueNums = new ArrayList<>();
        for (int num : nums) {
            uniqueNums.add(num);
        }
        sortedUniqueNums.addAll(uniqueNums);
        Collections.sort(sortedUniqueNums);

        int right = 0;

        for (int left = 0; left < sortedUniqueNums.size(); left++) {
            while (right < sortedUniqueNums.size() && sortedUniqueNums.get(right) < sortedUniqueNums.get(left) + n) {
                right++;
            }

            minOperations = Math.min(minOperations, n - (right - left));
        }

        return minOperations;
    }
}
