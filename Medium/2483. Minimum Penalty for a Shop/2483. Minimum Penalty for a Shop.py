class Solution:
    def bestClosingTime(self, customers: str) -> int:
        max_score = 0
        best_hour = -1
        score = 0

        for hour, c in enumerate(customers):
            score += 1 if c == "Y" else -1
            if score > max_score:
                max_score, best_hour = score, hour

        return best_hour + 1
