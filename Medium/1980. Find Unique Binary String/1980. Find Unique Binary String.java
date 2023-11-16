class Solution {
    public String findDifferentBinaryString(String[] nums) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < nums.length; i++) {
            // If the current character at position i is '0', append '1'; otherwise, append '0'.
            result.append(nums[i].charAt(i) == '0' ? '1' : '0');
        }

        return result.toString();
    }
}
