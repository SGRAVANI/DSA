//check whether given array has subset of given sum;
//top down approach
let arr=[1,2,3,4,5,10]
let sum=50;
let dp=new Array(arr.length+1);
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(sum+1);
}

for(let i=0;i<dp.length;i++)
{
    for(let j=0;j<dp[i].length;j++)
    {
        dp[i][j]=-1;
    }
}
console.log(subsetSum(arr,arr.length,sum))
function subsetSum(arr,n,sum)
{
if(sum==0 && n==0)
{
    return true
 //  dp[n][sum]=true
}
if(n>0 && sum==0)
{
    return true
 //dp[n][sum]=true
}
if(n==0 && sum>0)
{
    return false
 // dp[sum]=false
}
if(dp[n][sum]!=-1)
{
    return dp[n][sum]
}
else{
  if(arr[n-1]<=sum)
  {
    return dp[n][sum]=subsetSum(arr,n-1,sum-arr[n-1])||subsetSum(arr,n-1,sum)
  }
  else{
    return dp[n][sum]=subsetSum(arr,n-1,sum)
  }
}
}