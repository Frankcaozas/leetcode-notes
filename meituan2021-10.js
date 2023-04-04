function slectBag(weights, bag) {
    var dp = new Array(bag + 1).fill(0);
    for (var i = 0; i <= bag; i++) {
        for (var j = 0; j < weights.length; i++) {
            if (i - weights[j] >= 0) {
                dp[i] = Math.max(dp[i], dp[i - weights[j]] + 1);
            }
        }
    }
    return dp[bag];
}
var ret = slectBag([1, 2, 2, 4, 5], 15);
console.log(ret)
