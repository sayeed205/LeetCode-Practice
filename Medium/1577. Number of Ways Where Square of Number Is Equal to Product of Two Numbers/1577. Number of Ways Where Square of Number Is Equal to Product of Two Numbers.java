import java.util.HashMap;
import java.util.Map;

class Solution {
    public int numTriplets(int[] nums1, int[] nums2) {
        int ans = 0;
        
        Map<Long, Integer> nums1Product = new HashMap<>();
        Map<Long, Integer> nums2Product = new HashMap<>();
        
        // Calculate products of pairs of elements in nums1 and store their counts in nums1Product
        for (int i = 0; i < nums1.length; i++) {
            for (int j = i + 1; j < nums1.length; j++) {
                long product = (long) nums1[i] * nums1[j];
                nums1Product.put(product, nums1Product.getOrDefault(product, 0) + 1);
            }
        }
        
        // Calculate products of pairs of elements in nums2 and store their counts in nums2Product
        for (int i = 0; i < nums2.length; i++) {
            for (int j = i + 1; j < nums2.length; j++) {
                long product = (long) nums2[i] * nums2[j];
                nums2Product.put(product, nums2Product.getOrDefault(product, 0) + 1);
            }
        }
        
        // Check for square numbers in nums1 and add the corresponding product counts from nums2
        for (int num : nums1) {
            long target = (long) num * num;
            ans += nums2Product.getOrDefault(target, 0);
        }
        
        // Check for square numbers in nums2 and add the corresponding product counts from nums1
        for (int num : nums2) {
            long target = (long) num * num;
            ans += nums1Product.getOrDefault(target, 0);
        }
        
        return ans;
    }
}
