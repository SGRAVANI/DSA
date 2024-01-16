// Minimum number of insertions to make a string palindrome
// Given a string, find the minimum number of characters to be inserted to form Palindrome string out of given string

// Examples:
// ab: Number of insertions required is 1. bab
// aa: Number of insertions required is 0. aa

//steps:
// 1. find LCS for palindeome
// 2. no of insertions =length of string-lcsLength

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
let s1="abecdba"

let s2=s1.split('').reverse().join('')
console.log(s1,s2)
let lcsLength=lcs(s1,s2,s1.length,s2.length)
let noOfInsertions=s1.length-lcsLength
console.log(noOfInsertions)
