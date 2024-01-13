let l=8
let len=new Array(l)
for(let i=0;i<l;i++)
{
    len[i]=i+1;
}
console.log("rod length array is : ",len)
let price=[1,5,8,9,10,17,17,20]
let dp=new Array(len+1);
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array.fill(-1)
}
console.log(dp)
function unboundedKnapsack(price,len,l)
{
    
}