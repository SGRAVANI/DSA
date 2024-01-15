// Coin Change Problem Minimum Numbers of coins
// Given a value V, if we want to make change for V cents, and we have infinite supply of each of C = { C1, C2, .. , Cm} valued coins, what is the minimum number of coins to make the change?
// Example:

// Input: coins[] = {25, 10, 5}, V = 30
// Output: Minimum 2 coins required
// We can use one coin of 25 cents and one of 5 cents 
// let coins = [25, 10, 5]
// let  sum = 30
//steps
//1. initialize row 0 column 0 to sum  by infinity
//2. initialize  row 1 to n column 0 by 0 means for given set of coins how many coins needed for 0 rs change
//3. for row 1 if  from column 1 to sum  use 
//   if column (i.e. j)%coin[0]==0  (column is divisible by coin[0])
//        then table[1][j] = j/coin[0] else table[1][j]=Infinity fill cell table[1][1] to table[1][sum] accordingly  

// 4. for rest of rows apply unbounded knapsack and add coins accordingly and find minimum coins needed to make change 


// let coins = [25, 10, 5]
// let  sum = 30
let coins = [1,2,3]
let  sum = 5
let dp=new Array(coins.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(sum+1).fill(-1)
}
console.log(minCoin(coins,sum,coins.length))
function minCoin(coins,sum,n)
{
    if(n==0)
    {
        return Infinity
    }
    if(sum==0 && n>0)
    {
    return 0;
    }
    if(n==1)
    {
        if(sum%coins[0]==0)
        {
            return sum/coins[0]
        }
        else{
            return Infinity
        }
    }
    if(dp[n][sum]!=-1)
    {
        return dp[n][sum]
    }

    else{
    if(coins[n-1]<=sum)
    {
        return dp[n][sum]=Math.min(1+minCoin(coins,sum-coins[n-1],n),minCoin(coins,sum,n-1))
    }
    else{
        return dp[n][sum]=minCoin(coins,sum,n-1)
    }
    }
}
console.log(minCoin(coins,sum,coins.length))