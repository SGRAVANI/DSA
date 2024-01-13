let n=5
let price=[1 ,9 ,3 ,3 ,3]
console.log(n)
let rodLength=new Array(n)
for(let i=0;i<n;i++)
{
    rodLength[i]=i+1;
}
let dp=new Array(n+1);
console.log(dp)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(n+1).fill(-1)
}
let cap=n;
console.log(dp)