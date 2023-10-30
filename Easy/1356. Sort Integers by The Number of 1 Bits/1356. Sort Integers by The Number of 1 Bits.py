class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        # Define a custom sorting comparator
        def count_ones(n):
            # Count the number of 1 bits in the binary representation of n
            count = 0
            while n > 0:
                count += n & 1
                n >>= 1
            return count

        # Sort the array using the custom comparator
        arr.sort(key=lambda x: (count_ones(x), x))

        return arr
