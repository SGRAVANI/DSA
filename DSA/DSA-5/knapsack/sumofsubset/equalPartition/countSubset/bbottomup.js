let arr=[2,3,5,6,8,10]
let sum=10;
//find out number of subsets which is having sum=10
function countSubset(arr,n,sum)
{
    let dp=new Array(arr.length+1)
    for(let i=0;i<dp.length;i++)
    {
        dp[i]=new Array(sum+1)
    }
 for(let i=0;i<dp.length;i++)
 {
    for(let j=0;j<dp[i].length;j++)
    {
        if (j === 0) {
            dp[i][j] = 1; // For dp[0][0]
        } else {
            dp[i][j] = 0;
        }
    }
 } 
    // if(n==0 && sum==0)
    // {
    //     return 1;
    // }
    // if(n>0&&sum==0)
    // {
    //     return 1;
    // }
    // if(n==0&&sum>0)
    // {
    //     return 0;
    // }
    for(let i=1;i<dp.length;i++)
    {
        for(let j=1;j<dp[i].length;j++)
        {
            if(arr[i-1]<=j)
            {
                dp[i][j]=dp[i-1][j-arr[i-1]]+dp[i-1][j]
            }
            else{
                dp[i][j]=dp[i-1][j]
            }
        }
    }
    console.log(dp)
    return dp[n][sum]
    
}
console.log(countSubset(arr,arr.length,sum))