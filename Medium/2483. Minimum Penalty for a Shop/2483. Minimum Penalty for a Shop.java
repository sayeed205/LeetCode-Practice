class Solution {
    public int bestClosingTime(String customers) {
        int maxScore = 0;
        int bestHour = -1;
        int score = 0;

        for (int hour = 0; hour < customers.length(); hour++) {
            char c = customers.charAt(hour);
            score += (c == 'Y') ? 1 : -1;
            if (score > maxScore) {
                maxScore = score;
                bestHour = hour;
            }
        }

        return bestHour + 1;
    }
}
