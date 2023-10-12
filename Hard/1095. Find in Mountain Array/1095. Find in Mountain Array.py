# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:


class Solution:
    def findInMountainArray(
        self, target: int, mountain_arr: "MountainArray"
    ) -> int:
        left = 0
        right = mountain_arr.length() - 1

        # Find the peak element (the maximum element) in the mountain array using binary search.
        while left < right:
            mid = left + (right - left) // 2
            if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
                left = mid + 1
            else:
                right = mid

        # Now, you have found the peak. Use two binary searches to find the target on both sides of the peak.
        peak = left
        left_result = self.binary_search(target, mountain_arr, 0, peak, True)
        if left_result != -1:
            return left_result

        right_result = self.binary_search(
            target, mountain_arr, peak, mountain_arr.length() - 1, False
        )
        return right_result

    def binary_search(self, target, mountain_arr, left, right, ascending):
        while left <= right:
            mid = left + (right - left) // 2
            mid_val = mountain_arr.get(mid)

            if mid_val == target:
                return mid
            elif (mid_val < target and ascending) or (
                mid_val > target and not ascending
            ):
                left = mid + 1
            else:
                right = mid - 1

        return -1
