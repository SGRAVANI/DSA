let arr=[1,5,5,7,4]
// let totalsum=arr.reduce((sum,ele)=>sum+ele,0);
// let sum=Math.floor(totalsum/2);

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
    let dp=new Array(arr.length+1)
for(let i=0;i<dp.length;i++){
    dp[i]=new Array(sum+1)
}
for(let i=0;i<dp.length;i++)
{
    for(let j=0;j<dp[i].length;j++)
    {
        
        dp[0][j]=false
        dp[i][0]=true;
    }
}

    
    for(let i=1;i<dp.length;i++)
    {
        for(let j=1;j<dp[i].length;j++)
        {
            if(arr[i-1]<=j)
            {
                dp[i][j]= dp[i-1][j-arr[i-1]]||dp[i-1][j]
            }
            else{
                 dp[i][j]=dp[i-1][j]
            }
        
        }
    }
    return dp[arr.length][sum]
}
