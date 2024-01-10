//check whether given array has subset of given sum;
//bottom up approach
let arr=[1,2,3,4,5,10]
let sum=10;

console.log(subsetSum(arr,arr.length,sum))
function subsetSum(arr,n,sum)
{
    let dp=new Array(arr.length+1);
    for(let i=0;i<dp.length;i++)
    {
        dp[i]=new Array(sum+1);
    }
    
    for(let i=0;i<dp.length;i++)
    {
        for(let j=0;j<dp[i].length;j++)
        {
            dp[0][j]=false
            dp[i][0]=true;
    
        }
    }
   for(let i=1;i<dp.length;i++)
   {
    for(let j=1;j<dp[i].length;j++)
    {
        if(arr[i-1]<=j)
        {
         dp[i][j]=dp[i-1][j-arr[i-1]]||dp[i-1][j]
        }
        else{
            dp[i][j]=dp[i-1][j]
        }
    }
   }
  // console.log(dp)
   return dp[n][sum];        
// if(sum==0 && n==0)
// {
//     return true
//  //  dp[n][sum]=true
// }
// if(n>0 && sum==0)
// {
//     return true
//  //dp[n][sum]=true
// }
// if(n==0 && sum>0)
// {
//     return false
//  // dp[sum]=false
// }


// if(dp[n][sum]!=-1)
// {
//     return dp[n][sum]
// }
// else{
//   if(arr[n-1]<=sum)
//   {
//     return dp[n][sum]=subsetSum(arr,n-1,sum-arr[n-1])||subsetSum(arr,n-1,sum)
//   }
//   else{
//     return dp[n][sum]=subsetSum(arr,n-1,sum)
//   }
// }
}