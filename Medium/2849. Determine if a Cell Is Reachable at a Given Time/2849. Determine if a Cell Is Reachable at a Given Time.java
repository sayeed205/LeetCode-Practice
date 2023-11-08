class Solution {
    public boolean isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
        int dx = Math.abs(sx - fx);
        int dy = Math.abs(sy - fy);

        if (dx == 0 && dy == 0) {
            return t != 1;
        } else {
            return Math.max(dx, dy) <= t;
        }
    }
}
