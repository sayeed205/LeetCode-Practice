impl Solution {
    const M: i32 = 1_000_000_007;

    pub fn num_of_arrays(n: i32, m: i32, k: i32) -> i32 {
        if m < k {
            return 0;
        }

        let k = k as usize;
        let m = m as usize;
        let n = n as usize;

        let mut dp = vec![vec![vec![-1; k + 1]; m + 1]; n];
        let mut ret = 0;
        for i in 1..=(m - k + 1) {
            ret = (ret + Self::dfs(n - 1, i, k - 1, n, m, &mut dp)) % Self::M;
        }
        ret
    }

    fn dfs(left: usize, cur_max: usize, k: usize, n: usize, m: usize, dp: &mut Vec<Vec<Vec<i32>>>) -> i32 {
        if left < k {
            return 0;
        }
        if left == 0 {
            assert!(k == 0);
            return 1;
        }
        if k == 0 {
            return Self::pow(cur_max, left) as i32;
        }

        assert!(cur_max + k <= m, "cur_max: {}, k: {}, m: {}, left: {}", cur_max, k, m, left);

        if dp[left][cur_max][k] == -1 {
            let mut t = (Self::dfs(left - 1, cur_max, k, n, m, dp) as usize * cur_max % Self::M as usize) as i32;
            for max in cur_max + 1..=(m - k + 1) {
                t = (t + Self::dfs(left - 1, max, k - 1, n, m, dp)) % Self::M;
            }
            dp[left][cur_max][k] = t;
        }
        dp[left][cur_max][k]
    }

    fn pow(a: usize, mut b: usize) -> usize {
        let mut base = a;
        let mut ret = 1;
        let m = Self::M as usize;
        while b > 0 {
            if b & 1 > 0 {
                ret = ret * base % m;
            }
            base = base * base % m;
            b >>= 1;
        }
        ret
    }
}