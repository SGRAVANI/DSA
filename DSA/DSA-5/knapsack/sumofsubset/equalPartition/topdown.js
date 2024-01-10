let arr=[1,5,5,7,4]
let totalsum=arr.reduce((sum,ele)=>sum+ele,0);
let sum=Math.floor(totalsum/2);
let dp=new Array(arr.length+1)
for(let i=0;i<dp.length;i++){
    dp[i]=new Array(sum+1)
}
for(let i=0;i<dp.length;i++)
{
    for(let j=0;j<dp[i].length;j++)
    {
        dp[i][j]=-1;
    }
}

console.log(isEqualPartition(arr))

function isEqualPartition(arr)
{

let totalsum=arr.reduce((sum,ele)=>sum+ele,0);
if(totalsum%2==1)
{
    return false
}
else{
    let half=Math.floor(totalsum/2);
    return subsetSum(arr,arr.length,half)
}
}
function subsetSum(arr,n,sum)
{
    if(n==0&&sum==0)
    {
        return true
    }
    if(n==0 && sum>0)
    {
        return false
    }
    if(n>0 && sum==0)
    {
        return true
    }
    if(dp[n][sum]!=-1)
    {
        return  dp[n][sum]
    }
    else
    {
    if(arr[n-1]<=sum)
    {
        return dp[n][sum]= (subsetSum(arr,n-1,sum-arr[n-1])||subsetSum(arr,n-1,sum))
    }
    else{
        return dp[n][sum]=subsetSum(arr,n-1,sum)
    }
}
}
