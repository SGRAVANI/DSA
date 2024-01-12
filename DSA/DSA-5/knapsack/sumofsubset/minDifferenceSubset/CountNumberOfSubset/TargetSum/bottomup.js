// need to find all subset of arr which sum is 1 and you can change sign of any elemnet of arr by + or -
// ex 1.{1,1,2,-3}
//   2. {1,-1,3,-2}
//   3. {3,-1,-2,1}
// let arr=[1,1,2,3]

// =======
// solution is ssame as count number of subset with given difference
// here applying sign + and - we have to partion of +sign ele and - sign Element and generate sum s1 and s2 from that and then it will be s1 (sum of + sign number) and s2 (sum of - sign numbers) s1-s2=diff here it is sum 
// ======
let arr=[1,1,2,3]
let sum=1; //it is actually a difference  

let totalSum=arr.reduce((sum,ele)=>sum+ele,0)
let actualTraget=Math.floor((totalSum+sum)/2)
let dp=new Array(arr.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(actualTraget+1).fill(-1)
}
function countSubset(arr,n,targetSum)
{
    if(targetSum==0 && n==0)
    {
        return 1
    }
    if(targetSum>0 && n==0)
    {
        return 0
    }
    if(targetSum==0 && n>0)
    {
        return 1
    }
    if(dp[n][targetSum]!=-1)
    {
        return dp[n][targetSum]
    }
    else {
    if(arr[n-1]<=targetSum)
    {
    return dp[n][targetSum]= countSubset(arr,n-1,targetSum-arr[n-1])+countSubset(arr,n-1,targetSum)
    }
    else{
   return dp[n][targetSum]=countSubset(arr,n-1,targetSum)
    }
}
}
console.log(countSubset(arr,arr.length,actualTraget))