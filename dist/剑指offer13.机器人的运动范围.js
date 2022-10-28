"use strict";
function movingCount(m, n, k) {
    let ans = 0;
    const marked = [];
    for (let i = 0; i < m; i++) {
        marked.push(new Array(n).fill(false));
    }
    const dfs = (i, j) => {
        let x = calculate(i) + calculate(j);
        if (i < 0 || m < 0 || i >= m || j >= n || x > k || marked[i][j])
            return;
        if (!marked[i][j] && x <= k) {
            ans++;
            marked[i][j] = true;
        }
        dfs(i + 1, j);
        dfs(i, j + 1);
    };
    dfs(0, 0);
    return ans;
}
;
function calculate(i) {
    let res = 0;
    while (i > 0) {
        res += i % 10;
        i = Math.floor(i / 10);
    }
    return res;
}
