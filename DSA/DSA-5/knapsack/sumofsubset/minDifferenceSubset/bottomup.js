//arr=[1,2,7]
//need to find subset with min diiference
//ex s1={},s2={1,2,7} diff=10
//s1={1} s2={2,7} diff=9
//s1={1,2} s2={7} diff=7-3=4
//min is 4
//ans =4
//steps
//1. find sum of all elements and range will be (0,sum)
//2. find subset for(arr,arr.length,sum)
//3. generate vector from last row of subset table entries who have value true 
//4 from table consider only comlumns which are 0 to sum/2
//only in this case we will get positive difference for s2-s1
//5. iterate vector array and apply formala of diff=sum-vector[i] and find min difference by finding difference of every partion
let arr=[1,2,7]
let sum=arr.reduce((sum,ele)=>sum+ele,0)


function subsetSum(arr,n,sum)
{

    let dp=new Array(arr.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(sum+1)
}
for(let i=0;i<dp.length;i++)
{
    for(let j=0;j<dp[i].length;j++)
    {
        if(j==0)
        {
            dp[i][j]=true
        }
        else{
            dp[i][j]=false
        }
    }
}
for(let i=1;i<dp.length;i++)
{
    for(let j=1;j<dp[i].length;j++)
    {
        if(arr[i-1]<=j)
        {
            dp[i][j]=dp[i-1][j-arr[i-1]]||dp[i-1][j]
        }
        else{
            dp[i][j]=dp[i-1][j]
        }
    }
}
    
    console.log(dp)
    let vector=[];
    for(let i=0;i<=Math.floor(sum/2);i++)
    {
        if(dp[n][i])
        {
            vector.push(i)
        }
    }
    return vector;
}
let vector=subsetSum(arr,arr.length,sum)
console.log(vector)
let mn=Infinity
for(let i=0;i<vector.length;i++)
{
    //s2=sum-s1
    let s1=vector[i]
    let s2=sum-vector[i];
    let diff=s2-s1
    console.log(s1,s2,diff)
   //let diff=sum-2*(arr[vector[i]])
    
mn=Math.min(mn,diff)
}
console.log(mn)
//console.log(dp[arr.length])