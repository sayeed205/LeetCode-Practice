/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    var DIR = [0, 1, 0, -1, 0];
    var m = mat.length,
        n = mat[0].length; // The distance of cells is up to (M+N)
    var q = [];
    for (var r = 0; r < m; ++r) {
        for (var c = 0; c < n; ++c) {
            if (mat[r][c] === 0) {
                q.push([r, c]);
            } else {
                mat[r][c] = -1; // Marked as not processed yet!
            }
        }
    }

    while (q.length > 0) {
        var curr = q.shift();
        var r = curr[0],
            c = curr[1];
        for (var i = 0; i < 4; ++i) {
            var nr = r + DIR[i],
                nc = c + DIR[i + 1];
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && mat[nr][nc] === -1) {
                mat[nr][nc] = mat[r][c] + 1;
                q.push([nr, nc]);
            }
        }
    }
    return mat;
};
