let arr=[1,5,5,7,4,1]
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
    if(arr[n-1]<=sum)
    {
        return (subsetSum(arr,n-1,sum-arr[n-1])||subsetSum(arr,n-1,sum))
    }
    else{
        return subsetSum(arr,n-1,sum)
    }
}
