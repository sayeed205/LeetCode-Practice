class Solution:
    def minDeletions(self, s: str) -> int:
        freq_map = {}

        # Count the frequency of each character
        for char in s:
            freq_map[char] = freq_map.get(char, 0) + 1

        deletions = 0
        used_frequencies = set()

        for count in freq_map.values():
            current_count = count
            while current_count in used_frequencies and current_count > 0:
                current_count -= 1
                deletions += 1

            if current_count > 0:
                used_frequencies.add(current_count)

        return deletions
