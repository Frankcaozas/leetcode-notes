

## 1.二叉树

### 二叉树Morris遍历

🔔 Morris 遍历的原则

假设来到当前节点 cur，开始时 cur 来到头节点位置

- 如果 cur 没有左孩子，cur向右移动(cur = cur.right)
- 如果 cur 有左孩子，找到左子树上**最右**的节点 mostRight 
   - a.如果 mostRight 的右指针指向空，让其指向 cur， 然后 cur 向左移动(cur = cur.left)
   - b.如果 mostRight 的右指针指向 cur，让其指向 null， 然后 cur 向右移动(cur = cur.right)
- cur 为空时遍历停止

#### 前序遍历

- 对于没有左子树的节点只到达一次，直接打印
- 对于有左子树的节点会到达两次，则在第一次到达时打印

```java
public List<Integer> preorderTraversal(TreeNode root) {
    List<Integer> ans = new ArrayList<>();
    if (root != null) {
        TreeNode cur = root;
        TreeNode mostRight = null;
        while (cur != null) {
            // cur表示当前节点，mostRight表示cur的左孩子的最右节点
            mostRight = cur.left;
            if (mostRight != null) {
                // cur有左孩子，找到cur左子树最右节点
                while (mostRight.right != null && mostRight.right != cur) {
                    mostRight = mostRight.right;
                }
                // mostRight的右孩子指向空，让其指向cur，cur向左移动
                if (mostRight.right == null) {
                    mostRight.right = cur;
                    ans.add(cur.val);  // 此时第一次访问节点，记录答案
                    cur = cur.left;
                    continue;          // 直接进入下一次循环（容易忘）
                } else {
                    // mostRight的右孩子指向cur，让其指向空，cur向右移动
                    mostRight.right = null;
                    cur = cur.right;
                }
            } else {
                /// 没有左子树的节点只到达一次直接记录答案, cur 向右移动
                ans.add(cur.val);
                cur = cur.right;
            }
        }
    }
    return ans;
}
```

#### 中序遍历

-  对于没有左子树的节点只到达一次，直接打印 
-  对于有左子树的节点会到达两次，第二次到达时打印 

 

#### 后序遍历

- 第二次访问节点时逆序打印该节点左树的右边界
- 最后单独逆序打印整棵树的右边界

### 最小生成树

1.普里姆算法（prim)

```java
class Solution{
  public void MinSpanTree(MGraph G){
    int min, i, j, k;
    int adjvex[MAXVEX];
    int lowcost[MAXVEX];
    adjvex[0]=0;
    lowcost[0]=0;
    for(i=1; i<vexNum, i++) {
      lowcost[i]=G.arc[0][0];
      adjvex[i]=0;
    }
    for(i=1, i<vexNum, i++) {
      j=1;
      k=0;
      min=69452;
      while(j<vexNUm) {
        if(lowcost[j]!=0 && lowcost[j]<min) {
          min = loewcost[j];
          k = j;
        }
        j++;
      }
      Systen.out.printf("(%d, %d)",adjvex[k], k);
      lowcost[k]=0;
      for(j=1; j<vexNum; j++) {
        if(lowcost[j]!=0 && lowcost[j]>G.arc[k][j]){
          lowcost[j] = G.arc[k][j];
          adjvex[j]=k;
        }
      }
    }
  }
}
```

### 中序遍历

1递归

```java
public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        inorder(root, res);
        return res;
    }

    public void inorder(TreeNode root, List<Integer> res) {
        if (root == null) {
            return;
        }
        inorder(root.left, res);
        res.add(root.val);
        inorder(root.right, res);
    }
```

2迭代

stack 辅助


### 层序遍历

BFS 广度优先搜索

使用队列辅助

```java
public void levelOrder(TreeNode tree) {
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(tree);
    int level = 0;//统计有多少层
    while (!queue.isEmpty()) {
        //每一层的节点数
        int size = queue.size();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            //打印节点
            System.out.println(node.val);
            if (node.left != null)
                queue.add(node.left);
            if (node.right != null)
                queue.add(node.right);
        }
        level++;
        //打印第几层
        System.out.println(level);
    }
}
```

### 104.[ 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**示例：**
给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

```java
class Solution {
    int answer = 0;
  //0是最小的 不需要Integer.MIN_VALUE
    public int maxDepth(TreeNode root) {
        dfs(root,1);
        return answer;
    }
    void dfs(TreeNode node,int depth){
        if(node == null){
            return ;
        }
        answer = Math.max(answer,depth);
        dfs(node.left,depth+1);
        dfs(node.right,depth+1);
    }
}
```

### 判断是否为二叉搜索树

**如何防止空指针(NullPointerException)**

```java

class Solution {
    public boolean isValidBST(TreeNode root) {
        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean isValidBST(TreeNode node, long lower, long upper) {
        if (node == null) {
            return true;
        }
        if (node.val <= lower || node.val >= upper) {
            return false;
        }
        return isValidBST(node.left, lower, node.val) && isValidBST(node.right, node.val, upper);
    }
}
```

**return 用&&连接两个dfs**

### [103. 二叉树的锯齿形层序遍历](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/)
层序遍历变式
```ts
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []
  const queue: TreeNode[] = [root]
  const ans = []
  let fromLeft = true
  while (queue.length>0) {
    let level = []
    
    //必须这样写，不然length会变!!!!
    const size = queue.length 
    
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (!fromLeft) {
        level.unshift(node.val)
      } else {
        level.push(node.val)
      }
      if (node.left !==null) {
        queue.push(node.left)
      }
      if (node.right !==null) {
        queue.push(node.right)
      }
    }
    ans.push(level)
    fromLeft = !fromLeft
  }
  return ans
};
```



### [108. 将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)

```java
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return dfs(0,nums.length-1, nums);
    }
    public TreeNode dfs(int left, int right, int[] nums){
        if(left>right) return null;
        TreeNode node = new TreeNode(nums[(left+right)/2]);
        node.left = dfs(left,(left+right)/2-1,nums);
        node.right = dfs((left+right)/2+1,right,nums);
        return node;
    }
}
```



### [230. 二叉搜索树中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)

```java
class Solution {
    public int kthSmallest(TreeNode root, int k) {
        int cnt = 0;
        Deque<TreeNode> stack = new LinkedList<>();
        while(root!= null || !stack.isEmpty()){
        
            while(root!=null){
                stack.push(root);
                root= root.left;
            }
            root = stack.pop();
            cnt++;
            if(cnt==k){
                return root.val;
            }
            root = root.right;
        }
        return root.val;
    }
}
```

### [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
```ts
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  //根据preorder不能确定树的结构，因为不确定根节点左边有几个，右边有几个
  //可根据inorder(中序算出左右各有几个)
  // map [[9,0],[3,1],[15,2],[20,3],[7,4]]
  //preorder第一个必为根节点
  const inorderMap = new Map() //根据preorderRoot的值去找inorderRoot在inorder数组的index

  function dfs(
    preorder: number[],
    inorder: number[],
    preLeft: number,
    preRight: number,
    inLeft: number,
    inRight: number
  ): TreeNode | null {
    if (preLeft > preRight) {
      return null
    }
    const inorderRoot = inorderMap.get(preorder[preLeft])
    const leftSize = inorderRoot - inLeft
    const root = new TreeNode(preorder[preLeft])
    //递归构造子节点
    root.left = dfs(
      preorder,
      inorder,
      preLeft + 1,
      preLeft + leftSize,
      inLeft,
      inorderRoot - 1
    )
    root.right = dfs(
      preorder,
      inorder,
      preLeft + leftSize + 1,
      preRight,
      inorderRoot + 1,
      inRight
    )
    return root
  }

  const len = inorder.length
  for (let i = 0; i < len; i++) {
    inorderMap.set(inorder[i], i)
  }
  return dfs(preorder, inorder, 0, len - 1, 0, len - 1)
}
```


### [236. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root==null || root==p || root==q) return root;
        TreeNode left =  lowestCommonAncestor(root.left,p,q);
        TreeNode right = lowestCommonAncestor(root.right,p,q);
        if(left==null && right==null) return null;
        if(right==null) return left;
        if(left==null) return right;
        return root;
    }
}
```

### [797. 所有可能的路径](https://leetcode.cn/problems/all-paths-from-source-to-target/)
```ts
function allPathsSourceTarget(graph: number[][]): number[][] {
    const path = []
    const ans = [] 
    
    const dfs = (x: number) => {
        path.push(x)
        if(x === graph.length-1){
            ans.push(path.slice())//复制一个path
        }
        for(const next of graph[x]){
            dfs(next)
        }
        path.pop()//把节点删掉
    }

    dfs(0)
    return ans
};
```

//优化版,next指针简化连接过程
```ts

function connect(root: Node | null): Node | null {
  if (root === null) return root
  let levelLeft = root
  while(levelLeft.left != null){
    let head = levelLeft
    while(head !=null){
      head.left.next = head.right
      if(head.next)
        head.right.next = head.next.left
      head = head.next
    }
    levelLeft = levelLeft.left
  }
  return root
}
```

## 1.1图
### 存储方式
1.邻接表
```ts
const graph = [
0 [4,3,1],
1 [3,2,4],
2 [3],
3 [4],
4 []
]
```

2.邻接矩阵
```ts
//若有权则存储具体值
const graph = [
[0,1,0,1,1]
[0,0,1,1,1]
[0,0,0,1,0]
[0,0,0,0,1]
[0,0,0,0,0]
]
```
优劣：
邻接表占用空间少，但无法快速判断节点是否相邻，需要遍历
邻接矩阵占用空间多，可快速判断

*PS：在常规的算法题中，邻接表的使用会更频繁一些，主要是因为操作起来较为简单，但这不意味着邻接矩阵应该被轻视。矩阵是一个强有力的数学工具，图的一些隐晦性质可以借助精妙的矩阵运算展现出来。*

### 图的遍历
用visited记录节点状态
1 为在路径上，搜索未完成，
-1 为已搜索完的
0 为还未搜索s
```ts
function traverseGraph(graph: number[][], num: number) {
  const visited: number[]  = [] 
  
  const dfs = (x: number) => {
	  //前序位置
      visited[x] = 1
      for(const nighbor of graph[x]){
          dfs(next)
      }
      //后序位置
      visited[x] = -1
  }

  for(let i=0; i<num; i++){
	  dfs(i)
  }
  
};
```
#### [797. 所有可能的路径](https://leetcode.cn/problems/all-paths-from-source-to-target/)
类型：图的遍历
```typescript
function allPathsSourceTarget(graph: number[][]): number[][] {
  const path: number[] = []
  const ans: number[][]  = [] 
  
  const dfs = (x: number) => {
      path.push(x)
      if(x === graph.length-1){
          ans.push(path.slice())
      }
      for(const nighbor of graph[x]){
          dfs(next)
      }
      path.pop()
  }

  dfs(0)
  return ans
};
```

### 环检测
#### [207. 课程表](https://leetcode.cn/problems/course-schedule/)
1.DFS
```ts
const buildGraph = (numCourses: number, prerequisites: number[][]){
	for (let i = 0; i < numCourses; i++) {
        graph.push([])
    }
    for (const req of prerequisites) {
        graph[req[1]].push(req[0])
    }
}


function canFinish(numCourses: number, prerequisites: number[][]): boolean {

//构建图的邻接表
  const graph: number[][] = buildGraph(numCourses: number, prerequisites: number[][])
  
// 借助一个标志列表 visited，用于判断每个节点 i （课程）的状态：
// 未被 DFS 访问：i == 0；
// 已被其他节点启动的 DFS 访问：i == -1；
// 已被当前节点启动的 DFS 访问：i == 1。
  const visited = new Array(numCourses).fill(0)
  
  const dfs = (num: number)=>{
    if(visited[num] === 1) return false
    if(visited[num] === -1) return true
    visited[num] = 1
    for(const nighbor of graph[num]){
      if(!dfs(nighbor)) return false
    }
    visited[num] = -1
    return true
  }
  
  for(let i=0; i<numCourses; i++){
    if(!dfs(i)) return false
  }
  return true
};
```

2.BFS
用一个数组记录入度
将入度为0的压入队列
```java
public int[] findOrder(int numCourses, int[][] prerequisites) {
    // 建图，和环检测算法相同
    List<Integer>[] graph = buildGraph(numCourses, prerequisites);
    // 计算入度，和环检测算法相同
    int[] indegree = new int[numCourses];
    for (int[] edge : prerequisites) {
        int from = edge[1], to = edge[0];
        indegree[to]++;
    }

    // 根据入度初始化队列中的节点，和环检测算法相同
    Queue<Integer> q = new LinkedList<>();
    for (int i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            q.offer(i);
        }
    }

    // 记录拓扑排序结果
    int[] res = new int[numCourses];
    // 记录遍历节点的顺序（索引）
    int count = 0;
    // 开始执行 BFS 算法
    while (!q.isEmpty()) {
        int cur = q.poll();
        // 弹出节点的顺序即为拓扑排序结果
        res[count] = cur;
        count++;
        for (int next : graph[cur]) {
            indegree[next]--;
            if (indegree[next] == 0) {
                q.offer(next);
            }
        }
    }

    if (count != numCourses) {
        // 存在环，拓扑排序不存在
        return new int[]{};
    }
    
    return res;
}
}
```


### 拓扑排序
#### [210. 课程表 II](https://leetcode.cn/problems/course-schedule-ii/)
```ts
function findOrder(numCourses: number, prerequisites: number[][]): number[] {

	//buildGraph函数见上文
    const graph: number[][] = buildGraph(numCourses: number, prerequisites: number[][])
    
    const path = []
    const visited = []
    let cycle = false
    const dfs = (num: number) => {
        if(visited[num] === -1) return
        if(visited[num] === 1) {
            cycle = true
            return 
        }
        visited[num] = 1
        for (const neighbor of graph[num]){
            dfs(neighbor)
        }
        visited[num] = -1
        path.push(num)
    }
    for(let i=0; i<numCourses; i++){
        dfs(i)
    }
    return cycle ? [] : path.reverse()
};
```

### 最小生成树
#### Prim

##### [1584. 连接所有点的最小费用](https://leetcode.cn/problems/min-cost-to-connect-all-points/)
```ts
function minCostConnectPoints(points: number[][]): number {
  const len = points.length
  const graph = new Array(len)

  //构建图
  for(let i=0; i<len; i++){
    graph[i] = new Array(len)
  }
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
        const dis =
          Math.abs(points[i][0] - points[j][0]) +
          Math.abs(points[i][1] - points[j][1])
        graph[i][j] = dis
        graph[j][i] = dis
    }
  }
  
	//定义找边的函数
  function searchLowcost(from: number){
    for(let i=1;i<graph.length; i++){
      if(lowcost[i]!=0 && graph[from][i] < lowcost[i]){
        lowcost[i] = graph[from][i]
        //preAdj[i] = from
      }
    }
  }
  let res =0 
  //这道题只用算路径长度，不用记录节点，如果要记录节点需加一个数组preAdj 记录前一个节点index
  //也可让 lowcost: number[index, distance]
  const lowcost: number[] = new Array(len).fill(Number.MAX_VALUE)
  //const preAdj = new Array(len).fill(0)
	
  searchLowcost(0)
  lowcost[0] = 0

  // 剩余n - 1个节点未加入到Vnew，遍历
  for(let i=1; i<len; i++){
    let minIdx = -1
    let minDis = Number.MAX_VALUE
    for(let j=1; j<len; j++){
    //从当前的边中找到最小的
      if(lowcost[j]===0) continue
      if(lowcost[j]<minDis){
        minDis = lowcost[j]
        minIdx = j
      }
    }
    lowcost[minIdx] = 0
    res += minDis

    searchLowcost(minIdx)
  }
  return res
};
```

## 2.动态规划

教学：[https://cloud.tencent.com/developer/article/1817113](https://cloud.tencent.com/developer/article/1817113)

```
带备忘录的递归，自顶向下
动态规划，自底向上
基本思想是一致的，都是减少重复计算，时间复杂度也都是差不多
```

### 例题：

### [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/)
动态规划
```ts
function generateParenthesis(n: number): string[] {
  //1 ()
  //2 ()() (())
  //3 ()()() (())() ()(()) (()()) ((()))
  const dp: string[][] = new Array(n+1)
  dp[0] = ['']
  dp[1] = ['()']
  for (let i = 2; i <= n; i++) {
    const set = new Set<string>()
    for (let j=0; j<i; j++) {
      const leftList = dp[j]
      const rightList = dp[i-1-j]
      for(const str1 of leftList){
        for(const str2 of rightList){
          set.add('('+str1+')'+str2)
        }
      }
    }
    dp[i] = Array.from(set)
  }
  return dp[n]
}
```
递归
```java
class Solution {
    public List<String> generateParenthesis(int n) {
        if (n == 1) {
            return Arrays.asList("()");
        }
        Set<String> hs = new HashSet<>();
        for (String s : generateParenthesis(n-1)) {
            for (int i = 0; i < 2*n-2; i++) {
                hs.add(s.substring(0,i) + "()" + s.substring(i,s.length()));
            }
        }
        return new ArrayList(hs);
    }
}
```

### [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int answer = nums[0];
        int sum = 0;
        for(int num: nums){
            sum = Math.max(sum+num,num);
            answer = Math.max(sum,answer);
        }
        return answer;
    }
}
```

### [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)
```ts
function canJump(nums: number[]): boolean {
  
  let n = nums.length
  let  rightmost = 0
  for(let i=0; i<n; i++)
      if (i <= rightmost)
          rightmost = Math.max(rightmost, i + nums[i])
          if (rightmost >= n - 1)
              return true
  return false


};
```

难度中等2045收藏分享切换为英文接收动态反馈

### 剑指 Offer 60. n 个骰子的点数

把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

示例 1:

输入: 1
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]
示例 2:

输入: 2
输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]

```java
class Solution {
    public double[] dicesProbability(int n) {
        double[] dp = new double[6];
      	//初始化n=1边界情况
        Arrays.fill(dp, 1.0 /6.0);
  
        for(int i=2; i<n+1; i++){
            double[] temp = new double[5*i+1];
            for(int j=0; j<dp.length; j++){
                for(int k=0; k<6; k++){
                    temp[j+k] +=  dp[j] / 6.0; 
                }
            }
            dp = temp;
          //第n个只和n-1有关，因此交替前进
        }
        return dp;
    }
}
```

### [198. 打家劫舍](https://leetcode.cn/problems/house-robber/)
//思路
  //1.偷第k间， 不能偷k-1， 最大为前k-2加上第k间
  //2.不偷第k间， 最大为k-1
  //dp[i] = Max(dp[i-2] + nums[i], dp[i-1])
```typescript
function rob(nums: number[]): number {
	//思路
  //1.偷第k间， 不能偷k-1， 最大为前k-2加上第k间
  //2.不偷第k间， 最大为k-1
  //dp[i] = Max(dp[i-2] + nums[i], dp[i-1])
  const len = nums.length
  if(len <=1 ){
    return nums[0]
  }
  if(len <=2 ){
    return Math.max(nums[0], nums[1])
  }
  const dp: number[] = new Array(nums.length)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for(let i=2; i<len; i++){
    dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
  }
  return dp[len-1]
};
```
### [300. 最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

动态规划 复杂度O(N2)

```java
public int lengthOfLIS(int[] nums) {
        int max=1;
        int[] dp = new int[nums.length];
        Arrays.fill(dp,1);
        for(int i=0; i<nums.length; i++){
            for(int j=0; j<i; j++){
                if(nums[j]<nums[i]){
                    dp[i] = Math.max(dp[j]+1,dp[i]);
                }
            }
            max = Math.max(dp[i],max);
        }
        return max;
    }
```

动态规划+二分查找 O(nlogn)
[10,9,2,5,3,7,101,18]
```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        int n = nums.length;
        int[] tail = new int[n];
        tail[0] = 0;
        int len = 0;
        for(int i=0; i<n; i++){
            int num = nums[i];
            int left = 0;
            int right = len;
            while(left < right){
                int m = (left+right)/2;
                if(tail[m] >= num){
                    right = m;
                }else{
                    left = m+1;
                }
            }
            tail[left] = num;
            if(right==len) len++;
        }
        return len;
    }
}
// nums                  tails
// [10,9,2,5,3,7,1,18]  [10,0,0,0,0,0,0,0]
// [10,9,2,5,3,7,1,18]  [9,0,0,0,0,0,0,0]
// [10,9,2,5,3,7,1,18]  [2,3,7,0,0,0,0,0]
// [10,9,2,5,3,7,1,18]  [2,3,7,0,0,0,0,0]
每次更新len长度的最后一个数字（尽可能小）
用二分找tails最左侧>=num的位置（index）并更新
如果找不到（num比所有的tail里的值都大）index=right（最长子序列长度）
此时长度+1
```

### [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/)

给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0

注意amount为0时

```java
public class Solution {
    public int coinChange(int[] coins, int amount) {
        int max = amount + 1;
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, max);//因为下面需要判断使用硬币数最少的，用-1会影响，使用max代表-1
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.length; j++) {
                if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
```

## 3.查找

### 有序表查找

前提是线性表的记录必须是关键码有序（通常）从小到大

#### 折半查找(二分查找)

```java
int BinarySearch(int[] a,int val){
  int low,hig,mid;
  low = 0;
  hig = a.size;
  
  while(low < mid ){
    mid = (low+hig)/2;
    if(val < a[mid]){
      hig = mid-1;
    }else if(val > a[mid]){
      low = mid+1;
    }else{
      return mid;
    }
  }
  return 0;
}
//求左区间 mid = low+((hig-low)>>1)
//   			hig = mid
//				low = mid+1

//求右区间 mid = low+((hig-low)>>1) + 1（防止死循环）
//   			hig = mid - 1
//				low = mid
```

时间复杂度：O(logn)

适用场景：静态查找表不错

对于需要频繁改动的数据集，不建议(需要重新排序)

#### 插值查找

```
//将二分中 mid = (low+hig)/2 改为
//mid =low+(high-low)*(val-a[low])/*(a[hig]-a[low]);
```

时间复杂度：O(logn)

适用场景：对于分布均匀的表，插值查找性能好于折半查找

但数组中分布的是极端不均匀的数据，不合适

### 例题：

### 第一个错误版本

```java
public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int left = 1, right = n;
        while (left < right) { // 取等号会死循环
            int mid = left + (right - left) / 2; // 防止计算时溢出
            if (isBadVersion(mid)) {
                right = mid; // 答案在区间 [left, mid] 中
            } else {
                left = mid + 1; // 答案在区间 [mid+1, right] 中
            }
        }
        // 此时有 left == right，区间缩为一个点，即为答案
        return left;
    }
}
```

### [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)
```ts
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length-1
  while(left<=right){
    const mid = Math.floor((left+right)/2)
    if(nums[mid]===target){
      return mid
    }
    //[left, mid]是有序的
    if(nums[left]<nums[mid]){
      if(target>= nums[left] && target<= nums[mid]){
        right = mid-1
      }else{
        left = mid+1
      }
    }else{//[mid+1, right]有序
      if(target>= nums[mid+1] && target<=nums[right]){
        left = mid+1
      }else{
        right = mid-1
      }
    }
  }
  return -1
};
```

### [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
两次二分， 先求左边界，再求有边界
求右边界时 mid = Math.floor((left + right) / 2)+1
防止死循环
因为Math.floor((left + right) / 2)向下取整
```ts
function searchRange(nums: number[], target: number): number[] {
  let left = 0, right = nums.length - 1
  let mid = Math.floor((left + right) / 2)
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  if(left>=0 && nums[left] !== target) return [-1,-1]
  const l = left
  left = 0
  right = nums.length - 1
  while (left < right) {
    mid = Math.floor((left + right) / 2)+1
    if (nums[mid] <= target) {
      left = mid 
    } else {
      right = mid -1 
    }
  }
  return [l, right]
};
```
## 4.排序

![](https://pic.leetcode-cn.com/1629483637-tmENTT-Picture2.png#crop=0&crop=0&crop=1&crop=1&id=uHfOC&originHeight=1007&originWidth=3262&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### 冒泡排序

通过增加一个标志位 flag ，若在某轮「内循环」中未执行任何交换操作，则说明数组已经完成排序，直接返回结果即可。

优化后的冒泡排序的最差和平均时间复杂度仍为 O(N^2)O(N
2
) ；在输入数组 已排序 时，达到 最佳时间复杂度 \Omega(N)Ω(N) 。

```java

void bubbleSort(int[] nums) {
	int N = nums.length;
	for (int i = 0; i < N - 1; i++) {
		boolean flag = false; // 初始化标志位
		for (int j = 0; j < N - i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				int tmp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = tmp;
				flag = true;  // 记录交换元素
			}
		}
		if (!flag) break;     // 内循环未交换任何元素，则跳出
	}
}
```

### 归并排序

**算法特性**
时间复杂度： 最佳 Ω(NlogN) ，平均 Θ(NlogN) ，最差 O(NlogN) 。

**空间复杂度** O(N) ： 合并过程中需要借助辅助数组tmp ，使用 O(N) 大小的额外空间；划分的递归深度为 NlogN ，使用 O(logN) 大小的栈帧空间。

若输入数据是 链表 ，则归并排序的空间复杂度可被优化至 O(1) ，这是因为：

通过应用「双指针法」，可在 O(1) 空间下完成两个排序链表的合并，省去辅助数组 tmptmp 使用的额外空间；
通过使用「迭代」代替「递归划分」，可省去递归使用的栈帧空间；
详情请参考：[148. 排序链表](https://leetcode-cn.com/problems/sort-list/solution/sort-list-gui-bing-pai-xu-lian-biao-by-jyd/)

非原地： 辅助数组 tmptmp 需要使用额外空间。

稳定： 归并排序不改变相等元素的相对顺序。

非自适应： 对于任意输入数据，归并排序的时间复杂度皆相同。

```java
void mergeSort(int[] array, int left , int right){
 	//终止条件
  if(left>=right){
    return;
  }
  
  int mid = (left+right)/2;
  mergeSort(array,left,mid);
  mergeSort(array,mid+1,right);
  
  //分配临时数组空间
  int[] temp = new int[right-left+1];
  //复制过去
  for(int i=left; i<=temp.length; i++){
    temp[i-left] = array[i];
  }
  
  //合并
  int l=0;
  int r=mid-left+1;
  for(int i=0; i<temp.length; i++){
    if(l == mid-left+1){
      array[i] = temp[r];
      r++;
    }else if(r == right-left+1){
    	array[i] = temp[l];
      l++;
    }else if(temp[l]<temp[r]){
      array[i] = temp[l];
      l++;
    }else{
      array[i] == temp[r];
      r++;
    }
  }
}

int[] array = {4,3,2,5,7,1,0,9,1};
mergeSort(array,0,array.length-1);
```

### 堆排序
```ts
function swap(nums: number[], a: number, b: number) {
  const temp = nums[a]
  nums[a] = nums[b]
  nums[b] = temp
}

//形成最大堆
function heapify(nums: number[], start: number, end: number) {
  let father = start
  let child = father * 2 + 1
  while (child <= end){
    if (child + 1 <= end && nums[child] < nums[child + 1]) child++
    if(nums[father]> nums[child]) {
      return
    }else{
      swap(nums, father, child)
      father = child
      child = father*2+1
    }
  }
}

function heapSort(nums: number[]) {
  const n = nums.length
  //从最后一个有子节点的父节点开始heapify
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(nums, i, n - 1)
  }
  //将最上面的节点交换到最后，排除这个节点重新heapify
  for (let i = n - 1; i > 0; i--) {
    swap(nums, 0, i)
    heapify(nums, 0, i - 1)
  }
}
heapsort(nums)
```

### 例题：

### 合并两个有序数组

给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        while(m>0 && n>0){
            if(nums1[m-1]>nums2[n-1]){
                nums1[m+n-1] = nums1[m-1];
                m--;
            }else if(nums1[m-1]<=nums2[n-1]){
                nums1[m+n-1] = nums2[n-1];
                n--;
            }
        }
      //如果nums1中数字已经用完，还需单独将nums2剩下的放入nums1
      //而nums2先用完，就不用管了
        if(m==0){
            while(n>0){
                nums1[n-1]=nums2[n-1];
                n--;
            }
        }
    }
}
```

### [56. 合并区间](https://leetcode.cn/problems/merge-intervals/)
```ts
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  const merged = []
  for (const interval of intervals) {
    if (merged.length === 0) {
      merged.push(interval)
      continue
    }
    const last = merged[merged.length - 1]
    if (interval[0] <= last[1]) {
      merged.pop()
      merged.push([last[0], Math.max(interval[1], last[1])])
    } else {
      merged.push(interval)
    }
  }
  return merged
};
```

### [75. 颜色分类](https://leetcode.cn/problems/sort-colors/)
```ts
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let left = 0
  let right = 0
  // 2 0 2 1 1 0
  // 0 2 2 1 1 0
  // 0 1 2 2 1 0
  // 0 1 1 2 2 0 
  // 0 0 1 2 2 1
  for(let i=0; i<nums.length; i++){
  
  if(nums[i]===1){
      const num = nums[right]
      nums[right] = 1
      nums[i] = num
      right++
    }else if(nums[i] === 0){
      const num = nums[left]
      nums[left] = 0
      nums[i] = num
      if(nums[i]===1){//把1的换回去
        nums[i] = nums[right]
        nums[right] = 1
      }
      left++
      right++
      
    }
    
  } 
};
```

### [147. 对链表进行插入排序](https://leetcode.cn/problems/insertion-sort-list/)
时间复杂度 N(n2)
空间复杂度 N(1)
思路：在左端维护一个有序数组，并记录最后一个节点
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  //增加一个节点便于返回头节点
    const sortedList = new ListNode(-5001)
    sortedList.next = head
    let node = head.next
  //有序数组的最后一个节点
    let lastSort = head
    while(node !== null){
        if(node.val >= lastSort.val)
         //如果下一个节点比有序数组最后一个大
          //则直接加入有序数组
            lastSort = lastSort.next
        else{
            let prev = sortedList;
                while (prev.next.val <= node.val) {
                    prev = prev.next;
                }
                lastSort.next = node.next;
                node.next = prev.next;
                prev.next = node;
        }
        node = lastSort.next
    } 
    return sortedList.next
};


```

### [148. 排序链表](https://leetcode-cn.com/problems/sort-list/)
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

示例 1：
输入：head = [4,2,1,3]
输出：[1,2,3,4]

时间复杂度：O(n \log n)O(nlogn)，其中 nn 是链表的长度。
空间复杂度：O(\log n)O(logn)，其中 nn 是链表的长度。空间复杂度主要取决于递归调用的栈空间。


```java
class Solution {
    public ListNode sortList(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }
        ListNode slow = head;
        ListNode fast = head.next;
        while(fast !=null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode r = slow.next;
        slow.next = null;
        head = sortList(head);
        r = sortList(r);
        ListNode temp = new ListNode(0);
        ListNode  ret = temp;
        while(head!=null && r!=null){
            if(head.val < r.val){
                temp.next = head;
                head = head.next;
            }else{
                temp.next = r;
                r = r.next;
            }
            temp = temp.next;
        }
        if(head == null){
            temp.next = r;
        }else{
            temp.next = head;
        }
        return ret.next;
    }
}
```

### [162. 寻找峰值](https://leetcode.cn/problems/find-peak-element/)
1暴力
```ts

function findPeakElement(nums: number[]): number {
  let i = 0
  for(i=0; i<nums.length-1; i++){
    if(nums[i]>nums[i+1]) return i
  }
  return i
};
```
2.二分 log n
```ts
function findPeakElement(nums: number[]): number {
  let left=0, right = nums.length-1
  while(left<right){
    const mid= Math.floor((left+right)/2)
    if(nums[mid]>nums[mid+1]){
      right--
    }else{
      left++
    }
  }
  return left
};
```
### [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)
1.快速排序
```ts
function findKthLargest(nums: number[], k: number): number {
  return quikSlect(nums, 0, nums.length-1, nums.length-k)
};

function quikSlect(nums: number[], left: number, right: number, index: number){
  const pivot = randomPartion(nums, left, right)
  console.log(nums);
  console.log(pivot)
  if(pivot === index){
    return nums[pivot]
  }else if(pivot<index){
    return quikSlect(nums, pivot+1, right, index)
  }else{
    return quikSlect(nums, left, pivot-1, index)
  }
}

function swap(arr: number[], a: number, b: number) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function partion(nums: number[], left: number, right: number) {
  let i = left-1
  const pivot = nums[right]
  for (let j = left; j < right ; j++) {
    if (nums[j] < pivot) {
      i++
      swap(nums, i, j)
    }
  }
  swap(nums, i+1, right)
  return i+1
}

function randomPartion(nums: number[], left: number, right: number) {
  const random = Math.floor(Math.random() * (right - left+1) +left)
  swap(nums, random, right)
  return partion(nums, left, right)
}
```
2.堆排序 
略。。。
### [347. 前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/)
快速排序变式
```ts

```

利用priority queue(堆)
```ts
function heapify(arr: [number, number][], start: number, end: number) {
  let father = start
  let child = start * 2 + 1
  while (child <= end) {
    if (child + 1 <= end && arr[child][1] > arr[child + 1][1]) child++
    if (arr[child][1] > arr[father][1]) return
    else {
      const temp = arr[father]
      arr[father] = arr[child]
      arr[child] = temp
      father = child
      child = father * 2 + 1
    }
  }
}

function heapSort(arr: [number, number][]) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length - 1)
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const queue = new MinPriorityQueue()
  const cntMap = new Map<number, number>()
  const topKHeap: [number, number][] = []
  for (const num of nums) {

    cntMap.set(num, (cntMap.get(num) || 0) + 1)
  }
  for (const num of cntMap) {
    // console.log('num cnt: ' + num)
    if (topKHeap.length === k) {
      if (num[1] > topKHeap[0][1]) {
        topKHeap[0] = num
        heapSort(topKHeap)
      }
    } else {
      topKHeap.push(num)
      if (topKHeap.length === k) heapSort(topKHeap)
    }
  }
  return topKHeap.map((val) => val[0])
}
```

## 5.链表

### 例题

### 1.删除链表中的节点

请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。

题目数据保证需要删除的节点 不是末尾节点 。

![](https://assets.leetcode.com/uploads/2020/09/01/node1.jpg#crop=0&crop=0&crop=1&crop=1&id=ih6E0&originHeight=402&originWidth=562&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

```java
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
      //把下一个的值赋给自己，删除下一个
    }
}
```

### [2. 两数相加](https://leetcode.cn/problems/add-two-numbers/)
```ts
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const ans  = new ListNode()
  let cur  = ans
  let cnt = 0
  while(l1 !=null || l2!=null){
	//如果为节点空则记录值为0
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    cur.next = new ListNode((n1+n2+cnt)%10)
    cnt = Math.floor((n1+n2+cnt)/10)
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
    cur = cur.next
  }
  if(cnt>0) cur.next = new ListNode(cnt)
  return ans.next
};```

### 138.复制带随机指针的链表

给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

返回复制链表的头节点。

用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

val：一个表示 Node.val 的整数。
random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
你的代码 只 接受原链表的头节点 head 作为传入参数。

```java
/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    Map<Node, Node> copyedNode = new HashMap<Node, Node>();

    public Node copyRandomList(Node head) {
        if (head == null) {
            return null;
        }
        if (!copyedNode.containsKey(head)) {
            Node headNew = new Node(head.val);
            copyedNode.put(head, headNew);
            headNew.next = copyRandomList(head.next);
            headNew.random = copyRandomList(head.random);
        }
        return copyedNode.get(head);
    }
}
```

### 141.环形链表

给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png#crop=0&crop=0&crop=1&crop=1&id=jOBfH&originHeight=171&originWidth=531&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

```java
public boolean hasCycle(ListNode head) {
        if(head ==null || head.next==null){
            return false;
        }
        ListNode fast = head;
        ListNode slow = head;
        while(fast !=null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow){
                return true;
            }
        
        }
        return false;
    }
```

### [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png#crop=0&crop=0&crop=1&crop=1&id=tfZlC&originHeight=241&originWidth=742&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) {
            return null;
        }
        ListNode pA = headA, pB = headB;
        while (pA != pB) {
            pA = pA == null ? headB : pA.next;
            pB = pB == null ? headA : pB.next;
        }
        return pA;
    }
}
```

### [234. 回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)

给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。

**示例 1：**

![](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg#crop=0&crop=0&crop=1&crop=1&id=n7RYI&originHeight=62&originWidth=422&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

```
输入：head = [1,2,2,1]
输出：true
```

**示例 2：**

![](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg#crop=0&crop=0&crop=1&crop=1&id=dEmvq&originHeight=62&originWidth=182&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

```
输入：head = [1,2]
输出：false
```

```java
class Solution {
    public boolean isPalindrome(ListNode head) {
        if(head.next == null) return true;
        //1 找到mid分割为两部分
        ListNode fast = head.next;
        ListNode slow = head;
        while(fast!=null && fast.next!=null  ){
            fast = fast.next.next;
            slow = slow.next;
        }
        ListNode list = slow.next;
        slow.next = null;
        //2 把第二部分翻转
         list = reverse(list);
        //3 判断两部分是否相等
        ListNode temp = list;
        while(temp != null){
            if(temp.val != head.val){
                return false;
            }
            temp = temp.next;
            head = head.next;
        }
        //4还原
        return true;
    }

    public ListNode reverse(ListNode node){
        ListNode pre = null;
        ListNode cur = node;
        while(cur!=null){
            ListNode next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
}
```

## 6.字符串

### kmp patter match

1.找到next数组(代表每次失配后子串指针回到的位置)

```java
void getNext(String str,int[] next){
  int i = 0;
  int cnt = -1;
  next[0] = -1;
  while(i<next.length){
    if(cnt == -1 || str[i]==str[cnt]){
      i++;
      cnt++;
      next[i]=cnt;
    }else{
      cnt = next[cnt];
    }
  }
 
}

int Idex_KMP(int[] next,String S,String str){
  int i = 0;
  int j = 0;
  while(i<S.length){
    if(j==-1 || S[i]!=str[j]){
      i++;
      j++;
    }else{
      j = next[j];
    }
  }
```

### 例题：

### [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

```java
//滑动窗口
public int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<>();
        char[] charArray = s.toCharArray();
        int len = 0;
        int rk = -1;//记录出现不同字母的指针
        int n = charArray.length;
        for(int i=0; i<n; i++){//固定左端点
            if(i!=0){
              //右移一次删除一个字母
                set.remove(charArray[i-1]);
            }
            while(rk+1<n && !set.contains(charArray[rk+1])){
                set.add(charArray[rk+1]);
                rk++;
            }
            len = Math.max(len,rk-i+1);
        }
        return len;
    }
```

### [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"

```java
public class Solution {

    public String longestPalindrome(String s) {
        int len = s.length();
        if (len < 2) {
            return s;
        }

        int maxLen = 1;
        int begin = 0;
        // dp[i][j] 表示 s[i..j] 是否是回文串
        boolean[][] dp = new boolean[len][len];
        // 初始化：所有长度为 1 的子串都是回文串
        for (int i = 0; i < len; i++) {
            dp[i][i] = true;
        }

        char[] charArray = s.toCharArray();
        // 递推开始
        // 先枚举子串长度
        for (int L = 2; L <= len; L++) {
            // 枚举左边界，左边界的上限设置可以宽松一些
            for (int i = 0; i < len; i++) {
                // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
                int j = L + i - 1;
                // 如果右边界越界，就可以退出当前循环
                if (j >= len) {
                    break;
                }

                if (charArray[i] != charArray[j]) {
                    dp[i][j] = false;
                } else {
                    if (j - i < 3) {
                        dp[i][j] = true;
                    } else {
                        dp[i][j] = dp[i + 1][j - 1];
                    }
                }

                // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
                if (dp[i][j] && j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    begin = i;
                }
            }
        }
        return s.substring(begin, begin + maxLen);
    }
}
```

### [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }
        int length = strs[0].length();
        int count = strs.length;
        for (int i = 0; i < length; i++) {
            char c = strs[0].charAt(i);
            for (int j = 1; j < count; j++) {
                if (i == strs[j].length() || strs[j].charAt(i) != c) {
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }
}
```

### [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/)
1.排序
```ts
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};```
2.计数
```ts
function groupAnagrams(strs: string[]): string[][] {
  const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        map[count.toString()] ? map[count.toString()].push(s) : map[count.toString()] = [s];
    }
    return Object.values(map);

};```
### 125.验证回文串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

```
输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
```

方法一：预处理+再判断

判断方法：

1.stringBuffer.reverse()

2.双指针

```java
public boolean isPalindrome(String s) {
        StringBuffer sgood = new StringBuffer();
        int length = s.length();
        for (int i = 0; i < length; i++) {
            char ch = s.charAt(i);
            if (Character.isLetterOrDigit(ch)) {
                sgood.append(Character.toLowerCase(ch));
            }
        }
        StringBuffer sgood_rev = new StringBuffer(sgood).reverse();
        return sgood.toString().equals(sgood_rev.toString());
    }
```

方法二：直接判断(优化)

Character.isLetterOrDigit()判断是字母或者是数字

```java
public boolean isPalindrome(String s) {
        int n = s.length();
        int left = 0, right = n - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                ++left;
            }
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                --right;
            }
            if (left < right) {
                if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                    return false;
                }
                ++left;
                --right;
            }
        }
        return true;
    }
```

### 131.分割回文串

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]

**动态规划 + 递归**

```java
class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> list = new ArrayList<List<String>>();
        for(int i=1; i<s.length(); i++){
            if(s.isMirror){
                String str = s.substring(i,s.length);
            }
        

        }
    }

    boolean isMirror(String s){
        int l = 0;
        int r = s.length-1;
        while(l < r){
            if(s.charAt(i)!= s.charAt(j)){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
```

### 139.单词拆分

给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

**动态规划**

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> wordDictSet = new HashSet<>(wordDict);
        int n = s.length();
        boolean[] dp = new boolean[n+1];
        dp[0] = true;
        for(int i=1; i<n+1 ;i++){
            for(int j=0; j<i ;j++){
                if(dp[j] && wordDictSet.contains(s.substring(j,i))){
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }
}
```

### [387. 字符串中的第一个唯一字符](https://leetcode.cn/problems/first-unique-character-in-a-string/)
```typescript
function firstUniqChar(s: string): number {
  //第一次遍历存到哈希表中，如果重复值改为-1， 未重复值为索引
  const position = new Map();
    const n = s.length;
    for (let [i, ch] of Array.from(s).entries()) {
        if (position.has(ch)) {
            position.set(ch, -1);
        } else {
            position.set(ch, i);
        }
    }
    let first = n;
    for (let pos of position.values()) {
        if (pos !== -1 && pos < first) {
            first = pos;
        }
    }
    if (first === n) {
        first = -1;
    }
    return first;

  }
```
### [1694. 重新格式化电话号码](https://leetcode.cn/problems/reformat-phone-number/)
1.用silce分割，每次在结尾加上 '-'
```ts
function reformatNumber(number: string): string {
  const processedNum = number.replace(/[- ]/g, '')
  
  let ans: string = ''
  let i = 0
  for (i = 0; i < processedNum.length - 4; i += 3) {
    ans = ans + processedNum.slice(i, i+3) + '-'
  }
let x = processedNum.length-i
  if (x === 3) {
    ans = ans + processedNum.slice(i, i+3) 
  } else {
    if(x === 4){
        ans = ans + processedNum.slice(i, i+2) + '-' + processedNum.slice(i+2, i+4)
    }else{
        ans = ans + processedNum.slice(i, i+2)
    }
  }
  return ans
}```
2.将每段字符串存入数组， 最后用join('-')连接
```ts
function reformatNumber(number: string): string {
    const s: string = number.replace(/[- ]/g, ''), 
    n: number = s.length, 
    ans: Array<string> = []
    let idx: number = 0
    for (; idx < n - 4; idx += 3) {
        ans.push(s.substr(idx, 3))
    }
    if (idx == n - 4) {
        ans.push(s.substr(idx, 2))
        idx += 2
    }
    ans.push(s.substring(idx, n))
    return ans.join("-")
};
```

### [1790. 仅执行一次字符串交换能否使两个字符串相等](https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/)
```ts
function areAlmostEqual(s1: string, s2: string): boolean {
   const n = s1.length;
    const diff = [];
    for (let i = 0; i < n; ++i) {
        if (s1[i] !== s2[i]) {
            if (diff.length >= 2) {
                return false;
            }
            diff.push(i);
        }
    }
    if (diff.length === 0) {
        return true;
    }
    if (diff.length !== 2) {
        return false;
    }
    return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};
```

## 7.哈希与映射

### [171. Excel 表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/)

给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。
例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28

```java
class Solution {
    public int titleToNumber(String columnTitle) {
        int answer = 0;
        int l = columnTitle.length();
        for(int i=l; i>0; i--){
            answer += (1+(columnTitle.charAt(l-i)-'A')) * Math.pow(26,i-1);
        }
        return answer;
    }
}
```

### [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/)
```ts
class LRUCache {
  map: Map<number, any>
  constructor(private capacity: number) {
    this.map = new Map()
  }

  get(key: number): number {
    const val = this.map.get(key)
    if (val !== undefined) {
      this.map.delete(key)
      this.map.set(key, val)
      return val
    } else {
      return -1
    }
  }

  put(key: number, value: number): void {
    const val = this.map.get(key)
    if (val !== undefined) {
      this.map.delete(key)
      this.map.set(key, value)
    }
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value)
    }
  }
}
```


## 8.数组

### [11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg#crop=0&crop=0&crop=1&crop=1&id=SocS8&originHeight=383&originWidth=801&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

```java
public int maxArea(int[] height) {
        int ans = 0;
        int left = 0, right = height.length-1;
        int area = 0;
        while(left<right){
            int l = height[left];
            int r = height[right];
            area = (right-left)*(Math.min(l,r));
            ans = Math.max(ans,area);
            if(l>=r){
                right--;
            }else{
                left++;
            }
        }
        return ans;
    }
```
### [15. 三数之和](https://leetcode.cn/problems/3sum/)
思路：先将数组排序保证a，b，c不重复
传统做法 三重循环
优化：当a固定 a + b1 + c1 = 0 a + b2 + c2 = 0
b2  > b1  c2 < c1 
所以b往右移动，c往左移动， 可使用双指针
```ts
function threeSum(nums: number[]): number[][] {
    const threeSumRes: number[][] = []
    const sorted = nums.sort((a: number,b: number)=> a-b)
    for (let i = 0; i < nums.length - 2; i++) {
        const a = sorted[i]
        if(i>0 && a===sorted[i-1]) continue
        let left = i + 1
        let right = nums.length - 1
        for (; left < nums.length - 1; left++) {
            const b = sorted[left]
            if (left > i + 1 && b === sorted[left-1]) continue
            while (right > left && sorted[right] + a + b > 0) {
                right--
            }
            if(left === right) break
            if (sorted[right] + a + b === 0) threeSumRes.push( [a, b,sorted[right]])
        }
    }
    return threeSumRes
}
```


### [26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
```java
public int removeDuplicates(int[] nums) {
        if(nums.length==0 || nums.length==1) return nums.length;
        int cnt=1;
        int cur = nums[0];
        for(int i=1; i<nums.length;i++){
        
            if(nums[i]!=cur){
                cur = nums[i];
                cnt++;
                nums[cnt-1]=nums[i];
            
            }
        }
        return cnt;
    }
```

### [73. 矩阵置零](https://leetcode.cn/problems/set-matrix-zeroes/)
```ts
//o(1)
function setZeroes(matrix: number[][]): void {
  let fistRowHasZero = false
  let fistColHasZero = false

  //看第一列是否有0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      fistColHasZero = true
      break
    }
  }
  //看第一行是否有0
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      fistRowHasZero = true
      break
    }
  }
  //看每个位置是否有0， 如果有将的第一行第一列记成0
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
        if(matrix[i][j] ===0 ){
            matrix[i][0] = matrix[0][j] = 0
        }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
        if(matrix[i][0] ===0 || matrix[0][j]===0){
            matrix[i][j] = 0
        }
    }
  }
  if(fistColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
  if(fistRowHasZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0
    }
  }
}
```

### [128. 最长连续序列](https://leetcode-cn.com/problems/longest-consecutive-sequence/)

哈希表
```java
public int longestConsecutive(int[] nums) {
        if(nums.length==0) return 0;
        Set<Integer> set = new HashSet<>();
        int ans = 0;
        Arrays.sort(nums);
        int cnt = 1;
        for(int i=0; i<nums.length; i++){
            if(i==0) {
                set.add(nums[0]);
            }
            else{
                int x = nums[i];
                if(!set.contains(x)){
                    if(set.contains(x-1)){
                    cnt++;
                    }else{
                    cnt = 1;
                    }
                }
                set.add(x);
            }
            ans = Math.max(cnt,ans);
        }
        return ans;
    }
```

### [167. 两数之和 II - 输入有序数组](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)
1.二分 O(nlogn)
```javascript
var twoSum = function(numbers, target) {
    const ans = [-1,-1]
    for(let i=0; i<numbers.length; i++){
        let left=i+1,right=numbers.length-1
        const find = target-numbers[i]
        while(left <= right){
            const mid = left + ((right-left)>>1)
            if(numbers[mid]>find){
                right = mid - 1
            }else if(numbers[mid]<find){
                left = mid + 1
            }else{
                return [i+1, mid+1]
            }
        }
    }
    return ans
};
```
2.双指针
```javascript
var twoSum = function(numbers, target) {
    let left=0; right=numbers.length-1
    while(left<right){
        if(numbers[left]+numbers[right] > target)
            right--
        else if(numbers[left]+numbers[right] < target)
            left++
        else{
            return [left+1,right+1]
        }
    }
    return [-1,-1]
};
```
### [350. 两个数组的交集 II](https://leetcode.cn/problems/intersection-of-two-arrays-ii/)
哈希表
```javascript
var intersect = function (nums1, nums2) {
		//用哈希表记录长度更小的数组
		//默认nums1比nums2小,如果不是反着返回
    if (nums1.length > nums2.length)
        return intersect(nums2, nums1)
    const map = new Map()
    nums1.forEach((num) => {
        if (!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    })
    const intersection = []
    nums2.forEach((num) => {
        if (map.has(num)) {
            intersection.push(num)
            map.set(num, map.get(num) - 1)
            if(map.get(num) ===0 )
                map.delete(num)
        }
    })
    return intersection
};
```
## 9.位运算
| 符号 | 描述 | 运算规则 |
| --- | --- | --- |
| & | 与 | 两个位都为1时，结果才为1 |
| &#124; | 或 | 两个位都为0时，结果才为0 |
| ^ | 异或 | 两个位相同为0，相异为1 |
| ~ | 取反 | 0变1，1变0 |
| << | 左移 | 各二进位全部左移若干位，高位丢弃，低位补0 |
| >> | 右移 | 各二进位全部右移若干位，对无符号数，高位补0，有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补0（逻辑右移） |

### [191. 位1的个数](https://leetcode.cn/problems/number-of-1-bits/)
```typescript
function hammingWeight(n: number): number {
  let ans = 0
  for(let i=0; i<32; i++){
    ans += n & 1
    n = n >> 1
  }
  return ans
}
```
## 10.搜索与回溯
### [剑指 Offer 12. 矩阵中的路径](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/)
```typescript
function exist(board: string[][], word: string): boolean {
  const dfs = (k: number, board: string[][], row: number, col: number) => {
    //搜索后将该位置改为空串， 或者用一个数组标记
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
      return false
    if (board[row][col] != word.charAt(k)) return false
    if (k === word.length - 1) return true

    //搜索后将该位置改为空串,并用temp记录下字母
    const temp = board[row][col]
    board[row][col] = ''

    const res =
      dfs(k + 1, board, row - 1, col) ||
      dfs(k + 1, board, row + 1, col) ||
      dfs(k + 1, board, row, col - 1) ||
      dfs(k + 1, board, row, col + 1)

    //还原
    board[row][col] = temp
    return res
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(0, board, i, j)) return true
    }
  }
  return false
}
```
### 剑指offer [13. 机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)
```typescript
function movingCount(m: number, n: number, k: number): number {
    let ans = 0
    const marked: boolean[][] = []
    for (let i = 0; i < m; i++) {
        marked.push(new Array(n).fill(false))
    }
    const dfs = (i: number, j: number): void => {
        let x = calculate(i) + calculate(j)
        if (i < 0 || m < 0 || i >= m || j >= n || x > k || marked[i][j]) return

        if (!marked[i][j] && x <= k) {
            ans++
            marked[i][j] = true
        }
        dfs(i + 1, j)
        dfs(i, j + 1)
    }
    dfs(0, 0)
    return ans
};

function calculate(i: number): number {
    let res = 0
    while (i > 0) {
        res += i % 10
        i = Math.floor(i / 10)
    }
    return res
}
```
### [剑指 Offer 26. 树的子结构](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/)
```typescript
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (B === null || A=== null) return false
  return compareTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function compareTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean{
  if(tree2 ===  null) return true
  if(tree1===null || tree1.val != tree2.val) return false
  return compareTree(tree1.left, tree2.left) && compareTree(tree1.right, tree2.right)
}
```

###  [剑指 Offer 27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/)
```ts
function mirrorTree(root: TreeNode | null): TreeNode | null {
  function swap(node: TreeNode | null): void{
    if(!node) return
    const temp = node.left
    node.left = node.right
    node.right = temp
    swap(node.left)
    swap(node.right)
  }
  
  if(!root) return null
  swap(root)
  return root
}
```

###  [剑指 Offer 28. 对称的二叉树](https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/)

注意root为 *null* 时返回 true
```ts
function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return true
    return checkNode(root?.left, root?.right)

}
function checkNode(a: TreeNode | null, b: TreeNode | null) {
    if (a === null && b === null) return true
    if (a === null || b === null) return false
    if (a.val != b.val) return false

    return checkNode(a.left, b.right) && checkNode(a.right, b.left)
}
```

### [剑指 Offer 30. 包含min函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/)
```ts
class MinStack {
  private arr: number[] = []
  private minArr: number[] = []
  constructor() {}

  push(x: number): void {
    const minArr = this.minArr
    this.arr.push(x)
    if (minArr.length > 0) {
      if (x <= minArr[minArr.length - 1]) {
        minArr.push(x)
      }
    } else {
      this.minArr.push(x)
    }
  }

  pop(): void {
    if (this.arr.length >= 1) {
      const minArr = this.minArr
      const x = this.arr.pop()
      if(x === minArr[minArr.length-1] ){
          minArr.pop()
      }
    }
  }

  top(): number {
    return this.arr[this.arr.length - 1]
  }

  min(): number {
    return this.minArr[this.minArr.length - 1]
  }
}
```

### [46. 全排列](https://leetcode.cn/problems/permutations/)
```ts
//不用遍历的原因： 空间复杂度高
//回溯重复利用空间(回溯后撤销操作)
function permute(nums: number[]): number[][] {
  const n = nums.length
  const used: boolean[] = [].fill(false)
  const list = []
  const ans: number[][] = []

  function backtrack(len: number){
    if(len === n){
      ans.push([...list])
    }
    for(let i=0; i<n; i++){
      if(!used[i]){
        list.push(nums[i])
        used[i] = true
        backtrack(len+1)
        list.pop()
        used[i] = false
      }
    }
  }
  backtrack(0)
  return ans
}
```

### [78. 子集](https://leetcode.cn/problems/subsets/)
虽然是类似的递归，但要与全排列区分（子集其实迭代更好写）
```ts
function subsets(nums: number[]): number[][] {
  const set: number[] = []
  const ans: number[][] = [[]]
  const backtrack = (index: number) => {
    if (index >= nums.length) return
    for (let i = index; i < nums.length; i++) {
        set.push(nums[i])
        ans.push([...set])
        backtrack(i+1)
        set.pop()
    }
  }
  backtrack(0)
  return ans
};
```

### [79. 单词搜索](https://leetcode.cn/problems/word-search/)
```ts
function exist(board: string[][], word: string): boolean {
  const visted: boolean[][] = new Array(board.length)
  for (let i = 0; i < board.length; i++) {
    visted[i] = new Array(board[0].length).fill(false)
  }

  const dfs = (row: number, col: number, index: number) => {
    if (index >= word.length) return true
    if (row >= board.length || col >= board[0].length || row < 0 || col < 0 || visted[row][col]) return false
    if (board[row][col] === word.charAt(index)) {
      index++
      visted[row][col] = true
      const result = dfs(row + 1, col, index) || dfs(row, col + 1, index) || dfs(row - 1, col, index) || dfs(row, col - 1, index)
      visted[row][col] = false
      return result
    }
    return false
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const res = dfs(i, j, 0)
      if (res) return true
    }
  }
  return false
};
```
