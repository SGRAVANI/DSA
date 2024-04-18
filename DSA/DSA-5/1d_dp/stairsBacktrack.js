let n=5
let a=[1,2] //no of steps can be taken
let count=0
function solve(n,a,sum)
{
    if(sum==n)
    {
        count++
        return
    }
    if(sum>n)
    {
        return
    }
    for(let i=0;i<a.length;i++)
    {
     solve(n,a,sum+a[i])
    }
}
solve(10,a,0)
console.log(count)

//using recursion
function solveRecurs(n)
{
    if(n==0)
    {
        //count++
        return 1
    }
    if(n<0)
    {
        return 0
    }
    let by1=solveRecurs(n-1)
    let by2=solveRecurs(n-2)
    return by1+by2;
}
//let dp=new Array(n+1).fill(-1)
//let dp=new Array(n+1).fill(-1)
console.log(solveRecurs(n))



//solve memo
function solveMemo(n,dp)
{
    if(n==0)
    {
        //count++
        return 1
    }
    if(n<0)
    {
        return 0
    }
    if(dp[n]!=-1)
    {
        return dp[n]
    }
    let by1=solveRecurs(n-1)
    let by2=solveRecurs(n-2)
    return dp[n]= by1+by2;
}
//let dp=new Array(n+1).fill(-1)
let dp=new Array(n+1).fill(-1)
console.log(solveMemo(n,dp))
