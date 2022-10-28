"use strict";
/*
 * @lc app=leetcode.cn id=210 lang=typescript
 *
 * [210] 课程表 II
 */
// @lc code=start
function findOrder(numCourses, prerequisites) {
    const graph = [];
    for (let i = 0; i < numCourses; i++) {
        graph.push([]);
    }
    for (const req of prerequisites) {
        graph[req[1]].push(req[0]);
    }
    const path = [];
    const visited = [];
    let cycle = false;
    const dfs = (num) => {
        if (visited[num] === -1)
            return;
        if (visited[num] === 1) {
            cycle = true;
            return;
        }
        visited[num] = 1;
        for (const neighbor of graph[num]) {
            dfs(neighbor);
        }
        visited[num] = -1;
        path.push(num);
    };
    for (let i = 0; i < numCourses; i++) {
        dfs(i);
    }
    return cycle ? [] : path.reverse();
}
;
// @lc code=end
