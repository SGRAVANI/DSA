// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
let s="AXY"
let t="ADXCPY"
function lcs(s1,s2,n,m)
{
    let dp=new Array(n+1)
    for(let i=0;i<dp.length;i++)
    {
        dp[i]=new Array(m+1)
    }
    for(let i=0;i<dp.length;i++)
    {
        for(let j=0;j<dp[i].length;j++)
        {
        if(i==0||j==0)
        {
            dp[i][j]=0
        }
        else{
            if(s1[i-1]==s2[j-1])
            {
                dp[i][j]=1+dp[i-1][j-1]
            }
            else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
        }
    }
    return dp[n][m]
}
let lcsLength=lcs(s,t,s.length,t.length)
if(lcsLength==s.length)
{
    console.log("True...matched",s,"is a subsequence of ",t)
}
else{
  console.log("False...Not matched")
}