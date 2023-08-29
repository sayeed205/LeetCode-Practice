impl Solution {
    pub fn best_closing_time(customers: String) -> i32 {
        let mut max_score = 0;
        let mut best_hour = -1;
        let mut score = 0;

        for (hour, c) in customers.chars().enumerate() {
            score += if c == 'Y' { 1 } else { -1 };
            if score > max_score {
                max_score = score;
                best_hour = hour as i32;
            }
        }

        best_hour + 1
    }
}
