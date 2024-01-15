// Coin Change Problem Maximum Number of ways
// Given a value N, if we want to make change for N cents, and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins, how many ways can we make the change? The order of coins doesn’t matter.
// Example:
// for N = 4 and S = {1,2,3}, there are four solutions: {1,1,1,1},{1,1,2},{2,2},{1,3}. So output should be 4.
let cap=4;
let coins=[1,2,3]
//unbounded sum of subset
let dp=new Array(coins.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(cap+1).fill(-1)
}
console.log(unboundedCountSumSubset(coins,cap,coins.length))
function unboundedCountSumSubset(coins,sum,n)
{
if(n==0 && sum==0)
{
    return 1;
}
if(n==0 && sum>0)
{
    return 0
}
if(n>0 && sum==0)
{
    return 1;
}
if(dp[n][cap]!=-1)
{
    return dp[n][sum]
}
else{
    if(coins[n-1]<=sum)
    {
        return dp[n][sum]= unboundedCountSumSubset(coins,sum-coins[n-1],n)+unboundedCountSumSubset(coins,sum,n-1)
    }
    else{
     return dp[n][sum]=unboundedCountSumSubset(coins,sum,n-1)
    }
}
}