    //     1  2  3  4  5 
let price=[1, 9, 3, 3, 3]
let l=price.length
let len=new Array(l)
for(let i=0;i<l;i++)
{
    len[i]=i+1;
}
console.log("rod length array is : ",len)
//let price=[1,5,8,9,10,17,17,20]
let dp=new Array(l+1);
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(l+1).fill(-1)
}
console.log(dp)
let cap=l;
console.log("max profit:",unboundedKnapsack(price,len,cap,l))
function unboundedKnapsack(price,len,l,n)
{
    if(n==0 || l==0 )
    {
        return 0;
    }
    // if(n>0 && l==0)
    // {
    //     return 1;
    // }
    // if(n==0 && l>0)
    // {
    //     return 0;
    // }
    if(dp[n][l]!=-1)
    {
        return dp[n][l]
    }
    else{
        if(len[n-1]<=l)
        {
        return dp[n][l]= Math.max(unboundedKnapsack(price,len,l,n-1),price[n-1]+unboundedKnapsack(price,len,l-len[n-1],n))
        }
        else{
      return dp[n][l]=unboundedKnapsack(price,len,l,n-1)
        }
    }
}