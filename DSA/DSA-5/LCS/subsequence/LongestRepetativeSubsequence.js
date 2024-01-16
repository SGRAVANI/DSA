// Given a string, print the longest repeating subsequence such that the two subsequence don’t have same string character at same position, i.e., any i’th character in the two subsequences shouldn’t have the same index in the original string.
// Example:
// Input: str = "aab"
// Output: "a"
// The two subsequence are 'a'(first) and 'a' 
// (second). Note that 'b' cannot be considered 
// as part of subsequence as it would be at same
// index in both.

let s1="AABEBCDD"
let s2=s1
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
            }else{
                if(s1[i-1]==s2[j-1] && i!=j)
                {
                    dp[i][j]=1+dp[i-1][j-1]
                }
                else{
                    dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
                }
            }
           
        }
        
    }
    // for(let i=1;i<dp.length;i++)
    // {
    //     for(let j=1;j<dp[i].length;j++)
    //     {
            
    //             if(s1[i-1]==s2[j-1] && i!=j)
    //             {
    //                 dp[i][j]=1+dp[i-1][j-1]
    //             }
    //             else{
    //                 dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
    //             }
                
    //     }
    // }
    return dp[n][m]
}
let ans=lcs(s1,s2,s1.length,s2.length)
console.log(ans)