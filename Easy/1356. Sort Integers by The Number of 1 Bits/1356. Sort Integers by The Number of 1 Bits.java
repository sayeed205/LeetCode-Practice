import java.util.*;

class Solution {
    public int[] sortByBits(int[] arr) {
        // Define a custom sorting comparator
        Comparator<Integer> customComparator = new Comparator<Integer>() {
            @Override
            public int compare(Integer a, Integer b) {
                int countA = countOnes(a);
                int countB = countOnes(b);

                if (countA != countB) {
                    return Integer.compare(countA, countB); // Sort by the number of 1 bits
                } else {
                    return Integer.compare(a, b); // If the number of 1 bits is the same, sort in ascending order
                }
            }
        };

        // Sort the array using the custom comparator
        Integer[] boxedArray = Arrays.stream(arr).boxed().toArray(Integer[]::new);
        Arrays.sort(boxedArray, customComparator);

        // Convert back to primitive int array
        int[] sortedArray = Arrays.stream(boxedArray).mapToInt(Integer::intValue).toArray();

        return sortedArray;
    }

    // Helper function to count the number of 1 bits
    private int countOnes(int n) {
        int count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }
}
