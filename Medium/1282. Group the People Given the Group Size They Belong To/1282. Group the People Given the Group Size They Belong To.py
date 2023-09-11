from typing import List


class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        groups = {}  # Using a dictionary to store groups
        result = []  # Initialize the result list

        for i, size in enumerate(groupSizes):
            if size not in groups:
                groups[size] = []  # Initialize the group if it doesn't exist

            groups[size].append(i)  # Add the person to the corresponding group

            if len(groups[size]) == size:
                # If the group is full, add it to the result and reset it
                result.append(groups[size])
                groups[size] = []

        for size, group in groups.items():
            if group:
                result.append(group)  # Add any remaining groups to the result

        return result
