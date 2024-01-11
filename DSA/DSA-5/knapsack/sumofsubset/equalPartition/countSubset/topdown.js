let arr=[2,3,5,6,8,10]
let sum=10;
//find out number of subsets which is having sum=10
let dp=new Array(arr.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(sum+1)
}
for(let i=0;i<dp.length;i++)
{
    for(let j=0;j<dp[i].length;j++)
    {
        dp[i][j]=-1;
    }
}
function countSubset(arr,n,sum)
{
    if(n==0 && sum==0)
    {
        return 1;
    }
    if(n>0&&sum==0)
    {
        return 1;
    }
    if(n==0&&sum>0)
    {
        return 0;
    }

    if(dp[n][sum]!=-1)
    {
        return dp[n][sum]
    }
    else {
    if(arr[n-1]<=sum)
    {
        return dp[n][sum]= countSubset(arr,n-1,sum-arr[n-1])+countSubset(arr,n-1,sum)
    }
    else{
        return dp[n][sum]= countSubset(arr,n-1,sum)
    }
}
}
console.log(countSubset(arr,arr.length,sum))