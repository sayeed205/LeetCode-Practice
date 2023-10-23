class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
            return False

        # Check if n is a power of 2
        if n & (n - 1) == 0:
            # Check if the logarithm of n to the base 4 is an integer
            log_result = math.log(n, 4)
            return log_result.is_integer()
        else:
            return False
