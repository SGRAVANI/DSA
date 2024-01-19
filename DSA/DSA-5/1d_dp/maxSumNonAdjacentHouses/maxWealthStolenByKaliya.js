// Problem Description
// An infamous thief goes by the name of Kalia. He is famous for his sheer skills in the field of burglary.

// His next target is a colony containing houses with enormous wealth. A given input array represents the wealth of each house in the colony.

// He wants to steal the maximum possible wealth in one go, but needs to be cautious. He cannot steal from consecutive houses as that would trigger the security alarm.

// You are his sidekick. Help him find the maximum wealth he can steal.

// Input format
// First line contains a number N denoting the number of houses.

// Next line contains N space separated numbers where the ith number denotes the wealth in ith house.

// Output format
// A single number denoting the maximum wealth Kalia can steal.

// Constraints
// 1 <= N <= 100000

// 1 <= Wi <= 1000

// Sample Input 1
// 7

// 2 5 1 3 6 2 4

// Sample Output 1
// 15

// Explanation 1
// The houses with wealth 5 + 6 + 4 = 15 give the maximum wealth he can steal without triggering the security alarm.
let arr=[2 ,5 ,1 ,3, 6, 2, 4]
let dp=new Array(arr.length).fill(-1);
function maxWealth(arr,n)
{
if(n<=0)
{
    return 0;
}
if(dp[n]!=-1)
{
    return dp[n]
}
let pick=arr[n]+maxWealth(arr,n-2)
let notPick=0+maxWealth(arr,n-1)
return dp[n] =Math.max(pick,notPick)
}
let ans=maxWealth(arr,arr.length-1,dp)
console.log(ans)