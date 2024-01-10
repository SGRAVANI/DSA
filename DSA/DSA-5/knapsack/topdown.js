let dp=new Array(100)
for(let i=0;i<100;i++)
{
    dp[i]=new Array(1000)
}
for(let i=0;i<dp.length;i++)
{
    for(let j=0;j<dp[i].length;j++)
    {
        dp[i][j]=-1
    }
}
function knapsack(weight,val,cap,n)
{

    if(cap==0||n==0)
    {
        return 0;
    }
    if(dp[n][cap]!=-1)
   {
    return dp[n][cap];
}
  if(dp[n][cap]==-1)
  {
  if(weight[n-1]<=cap)
    {
        return dp[n][cap]=Math.max(val[n-1]+knapsack(weight,val,cap-weight[n-1],n-1),knapsack(weight,val,cap,n-1))
    }
    else{
        return dp[n][cap]=knapsack(weight,val,cap,n-1)
    }
  }
}
// let weight=[1,3,2,5]
// let val=[1,4,5,7]
// let cap=7
let weight= [1, 1, 1] 
let cap = 2;
let  val = [10, 20, 30]
knapsack(weight,val,cap,weight.length)
console.log(dp[weight.length][cap])