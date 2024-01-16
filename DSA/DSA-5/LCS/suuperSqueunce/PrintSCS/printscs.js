// Given two strings X and Y, print the shortest string that has both X and Y as subsequences. If multiple shortest supersequence exists, print any one of them.

// Examples:

// Input: X = "AGGTAB",  Y = "GXTXAYB"
// Output: "AGXGTXAYB" OR "AGGXTXAYB" 
// OR Any string that represents shortest
// supersequence of X and Y

// Input: X = "HELLO",  Y = "GEEK"
// Output: "GEHEKLLO" OR "GHEEKLLO"
// OR Any string that represents shortest 
// supersequence of X and Y


//in question we have to find sequence which is shortest and super means it needs to merge both input string and it should be shortest
//steps 1.  find lcs lenth
//step2. like while printing lcs string if charcter is matching then print it while taversing table of lcs from dp[n][m] and if strings are not matching then print char and move to largest value from dp[i-1][j] || dp[i][j-1] 

let X = "AGGTAB"
let  Y = "GXTXAYB"
let dp=new Array(X.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(Y.length+1).fill(-1)
}
function lcsBottomUp(s1,s2,n,m)
{
    if(n==0||m==0)
    {
        return 0
    }
    if(dp[n][m]!=-1)
    {
        return dp[n][m]
    }
    if(s1[n-1]==s2[m-1])
    {
        return dp[n][m]=1+lcsBottomUp(s1,s2,n-1,m-1)
    }
    else{
        return dp[n][m]=Math.max(lcsBottomUp(s1,s2,n,m-1),lcsBottomUp(s1,s2,n-1,m));
    }
}
let maxLength=lcsBottomUp(X,Y,X.length,Y.length)
console.log(dp)
let i=X.length;
let j=Y.length;
let scs=""
while(i>0 && j>0)
{
    if(X[i-1]==Y[j-1])
    {
    scs=X[i-1]+scs
    i--;
    j--;
    }
    else if(dp[i-1][j]>=dp[i][j-1])
    {
        scs=X[i-1]+scs
        i--;
    }
    else{
        scs=Y[j-1]+scs
        j--;
    }
}
while(i>0)
{
    scs=X[i-1]+scs;
    i--
}
while(j>0)
{
    scs=Y[j-1]+scs
    j--
}
console.log(scs)