import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {
        int n = nums.length;
        int[] dp = new int[n];
        int maxSum = nums[0];
        
        Deque<Integer> deque = new ArrayDeque<>();
        
        for (int i = 0; i < n; i++) {
            // Calculate the maximum value between 0 and the sum of previous values
            nums[i] += (deque.isEmpty()) ? 0 : Math.max(0, dp[deque.peekFirst()]);
            
            // Pop elements from the front of the deque that are out of the range k
            while (!deque.isEmpty() && i - deque.peekFirst() >= k) {
                deque.pollFirst();
            }
            
            // Update maxSum
            maxSum = Math.max(maxSum, nums[i]);
            
            // Pop elements from the back of the deque that are smaller than the current element
            while (!deque.isEmpty() && nums[i] >= dp[deque.peekLast()]) {
                deque.pollLast();
            }
            
            // Push the current index into the deque
            deque.offerLast(i);
            
            // Update dp array
            dp[i] = nums[i];
        }
        
        return maxSum;
    }
}
