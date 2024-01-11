let arr=[2,3,5,6,8,10]
let sum=10;
//find out number of subsets which is having sum=10
function countSubset(arr,n,sum)
{
    if(n==0 && sum==0)
    {
        return 1;
    }
    if(n>0&&sum==0)
    {
        return 1;
    }
    if(n==0&&sum>0)
    {
        return 0;
    }
    if(arr[n-1]<=sum)
    {
        return countSubset(arr,n-1,sum-arr[n-1])+countSubset(arr,n-1,sum)
    }
    else{
        return countSubset(arr,n-1,sum)
    }
}
console.log(countSubset(arr,arr.length,sum))