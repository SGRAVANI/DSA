let nums=[2,1,2,3,3]
let sum=3
//let c=0
function tablemethod(nums,n,sum)
{
    let dp=new Array(n+1)
    for(let i=0;i<dp.length;i++)
    {
        dp[i]=new Array(sum+1)
    }
    for(let i=0;i<dp.length;i++)
    {
        dp[i][0]=1;
    }
    for(let i=1;i<=sum;i++)
    {
        dp[0][i]=0;
    }
   for(let i=1;i<=n;i++)
   {
    for(let j=1;j<=sum;j++)
    {
        if(nums[i-1]<=j)
        {
           let pick=dp[i-1][j-nums[i-1]]
           let notpick=dp[i-1][j]
           dp[i][j]=pick+notpick
        }
        else{
            dp[i][j]=dp[i-1][j]
        }
    }
    console.log(dp)
   }
return dp[n][sum]
}
function solve(nums,sum,n)
{
    if(sum==0)
    {
        return 1;
        
    }
    if(n<=0 && sum!=0)
    {
        return 0;
    }
    if(nums[n-1]<=sum)
    {
        let pick= solve(nums,sum-nums[n-1],n-1)
        let notpick=solve(nums,sum,n-1)
         return pick+notpick
    }
    else{
        let notpick=solve(nums,sum,n-1)
        return notpick
    }
}
 //c=solve(nums,sum,nums.length)
//console.log(c)
c=tablemethod(nums,nums.length,sum)
console.log(c)