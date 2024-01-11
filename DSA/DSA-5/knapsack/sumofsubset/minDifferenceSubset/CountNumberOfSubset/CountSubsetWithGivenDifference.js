//this program will count number of subset with given difference
//input arr=[1,1,2,3]
//difference=1
//subsets
//p1={1,1,2} p2={3} diff=4-3=1
//p1={1,3} p2={1,2} diff=1
//p1={1,3} p2={1,2} diff=1  position/index of 1 interchanged will also consider new subset

//approach
//s1-s2=diff  ...(1)
//s1+s2=sum (of array)..(2), now add (1)+(2)
//-------------
//2s1  =diff+sum
//s1=(sum+diff)/2
//now find count of s1 in arr means this problem is reduced in count total subset having given target sum

let arr=[1,1,2,3]
let diff=1;
let sum=arr.reduce((sum,ele)=>sum+ele,0)
let s1=Math.floor((sum+diff)/2)
let dp=new Array(arr.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(s1+1).fill(-1);
}
console.log(dp)
function countSubset(arr,n,sum)
{
    if(n==0 && sum==0)
    {
    return 1;
    }
    if(n==0&&sum>0)
    {
        return 0
    }
    if(n>0 && sum==0)
    {
        return 1;
    }
    if(dp[n][sum]!=-1)
    {
        return dp[n][sum]
    }
    else{
        if(arr[n-1]<=sum)
        {
        return dp[n][sum]=countSubset(arr,n-1,sum-arr[n-1])+countSubset(arr,n-1,sum)
        }
        else{
            return dp[n][sum]=countSubset(arr,n-1,sum)
        }
    }
}
console.log(countSubset(arr,arr.length,s1))