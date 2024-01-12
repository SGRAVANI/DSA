let weight=[1,3,2,5]
let val=[1,4,5,7]
let cap=7
let n=4

let dp=new Array(n+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(cap+1).fill(-1)
}
//console.log(dp)
console.log(knapsack(weight,val,cap,4))
console.log(dp)
function knapsack(weight,val,cap,n)
{
   if(n==0||cap==0)
   {
    return 0;
   }
   if(dp[n][cap]!=-1)
   {
    return dp[n][cap]
   }
   else{
    if(weight[n-1]<=cap)
    {
        return dp[n][cap]=Math.max(val[n-1]+knapsack(weight,val,cap-weight[n-1],n),
        knapsack(weight,val,cap,n-1))
    }
    else{
        return dp[n][cap]=knapsack(weight,val,cap,n-1)
    }
   }
   
}
