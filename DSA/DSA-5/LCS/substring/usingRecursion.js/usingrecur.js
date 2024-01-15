//find longest common substring between s1 & s2
let s1="abcjklp"
let s2="acjkp"
// let dp=new Array(s1.length+1)
// for(let i=0;i<dp.length;i++)
// {
//     dp[i]=new Array(s2.length+1).fill(-1)

// }
//let ans=0;
function longestSub(s1,s2,n,m,l)
{
    if(n==0||m==0)
    {
        return l;
    }
    // if(dp[n][m]!=-1)
    // {
    //     return dp[n][m]
    // }
    // else{

    
    if(s1[n-1]==s2[m-1])
    {
        //  dp[n][m]=1+longestSub(s1,s2,n-1,m-1)
        //  //console.log(dp[n][m])
        //  if(ans<dp[n][m])
        //  {
        //     ans=dp[n][m];
        //     console.log(ans)
        //  }
        //  return dp[n][m];
        
            return longestSub(s1,s2,n-1,m-1,l+1)
        
    }
    else{
        // return Math.max(longestSub(s1,s2,n,m-1),longestSub(s1,s2,n-1,m))
        // dp[n][m]=0;
        // return dp[n][m];
       return Math.max(l,Math.max(longestSub(s1,s2,n,m-1,0),longestSub(s1,s2,n-1,m,0)))
    }
//}
}

console.log(longestSub(s1,s2,s1.length,s2.length,0))
//console.log(dp)
//console.log(ans)
//console.log(longestSub(s1,s2,s1.length,s2.length))