// Shortest Common SuperSequence
// Given two strings str1 and str2, find the shortest string that has both str1 and str2 as subsequences.
// Examples:

// Input:   str1 = "geek",  str2 = "eke"
// Output: "geeke"
//super sequence: should contains both string sequetially in ordered way in merged string. it is not required continous both order should be maintained

//note: should not be conitous but order should be maintained
let s1="AGGTAB"
let s2="GXTXAYB"

//super-string=AGGXTXAYB
//we have to write common chracter of sequences (i.e.LCS) only once in super sequence to make it shortest
//solution : we have to return length of shortest super sequence
//ans= s1.length+s2.length-LCS(s1,s2)
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
        }
    }
    for(let i=1;i<dp.length;i++)
    {
        for(let j=1;j<dp[i].length;j++)
        {
            if(s1[i-1]==s2[j-1])
            {
            dp[i][j]=1+dp[i-1][j-1]
            }
            else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    let lcs=dp[n][m]
    //console.log(lcs)
    return lcs
}
let lcsLength=lcs(s1,s2,s1.length,s2.length)
let totalLength=s1.length+s2.length;
let shortestSuperSequenceLength=totalLength-lcsLength;
console.log(shortestSuperSequenceLength)