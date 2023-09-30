class Solution {
    public boolean find132pattern(int[] nums) {
        int n = nums.length;
        if (n < 3) {
            return false;
        }

        Stack<Integer> stack = new Stack<>();
        int third = Integer.MIN_VALUE;

        for (int i = n - 1; i >= 0; i--) {
            int num_i = nums[i];

            if (num_i < third) {
                return true;
            }

            while (!stack.isEmpty() && num_i > stack.peek()) {
                third = stack.pop();
            }

            if (num_i > third) {
                stack.push(num_i);
            }
        }

        return false;
    }
}
