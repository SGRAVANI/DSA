function longestSub(s1, s2, n, m, l, memo) {
    if (n === 0 || m === 0) {
        return l;
    }

    if (memo[n][m][l] !== undefined) {
        return memo[n][m][l];
    }

    if (s1[n - 1] === s2[m - 1]) {
        memo[n][m][l] = longestSub(s1, s2, n - 1, m - 1, l + 1, memo);
    } else {
        memo[n][m][l] = Math.max(
            l,
            Math.max(longestSub(s1, s2, n, m - 1, 0, memo), longestSub(s1, s2, n - 1, m, 0, memo))
        );
    }

    return memo[n][m][l];
}

let s1 = "ab";
let s2 = "ac";

// Initialize memoization table
let memo = new Array(s1.length + 1);
for (let i = 0; i <= s1.length; i++) {
    memo[i] = new Array(s2.length + 1);
    for (let j = 0; j <= s2.length; j++) {
        memo[i][j] = new Array(Math.min(s1.length, s2.length) + 1).fill(undefined);
    }
}

console.log(longestSub(s1, s2, s1.length, s2.length, 0, memo))
console.log(memo)