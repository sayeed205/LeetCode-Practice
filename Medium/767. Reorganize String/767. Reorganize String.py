class Solution:
    def reorganizeString(self, s: str) -> str:
        char_count = {}
        for char in s:
            char_count[char] = char_count.get(char, 0) + 1

        max_heap = [(-count, char) for char, count in char_count.items()]
        heapq.heapify(max_heap)

        result = []
        prev_count, prev_char = 0, ""

        while max_heap:
            count, char = heapq.heappop(max_heap)
            result.append(char)

            if prev_count < 0:
                heapq.heappush(max_heap, (prev_count, prev_char))

            count += 1
            prev_count, prev_char = count, char

        if len(result) == len(s):
            return "".join(result)
        else:
            return ""
