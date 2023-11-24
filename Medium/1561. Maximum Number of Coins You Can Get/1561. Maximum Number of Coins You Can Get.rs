impl Solution {
    pub fn max_coins(mut piles: Vec<i32>) -> i32 {
        piles.sort_unstable(); // Use unstable sort to improve performance

        let mut ans = 0;
        let mut ind = piles.len() - 2;
        let iterats = piles.len() / 3;

        for _ in 0..iterats {
            ans += piles[ind];
            ind -= 2;
        }

        ans
    }
}
