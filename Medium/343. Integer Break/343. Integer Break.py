class Solution:
    def integerBreak(self, n: int) -> int:
        if n <= 3:
            return n - 1

        # Try to break the number into as many 3s as possible.
        # The reason is that for numbers greater than or equal to 4,
        # breaking them into 3s maximizes the product.
        quotient, remainder = divmod(n, 3)

        if remainder == 0:
            return 3**quotient
        elif remainder == 1:
            # If there's a remainder of 1, distribute it to one of the 3s as 4.
            return 3 ** (quotient - 1) * 4
        else:
            return 3**quotient * remainder
