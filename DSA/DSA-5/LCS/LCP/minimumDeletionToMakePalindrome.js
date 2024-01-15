// Minimum number of deletions to make a string palindrome
// Given a string of size ‘n’. The task is to remove or delete minimum number of characters from the string so that the resultant string is palindrome.
// Examples :

// Input : aebcbda
// Output : 2
// Remove characters 'e' and 'd'
// Resultant string will be 'abcba'
// which is a palindromic string
let s1="aebcbda"
let s2=s1.split('').reverse().join('')
function lcs(s1,s2,n,m)
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
        return dp[n][m]=1+lcs(s1,s2,n-1,m-1)
    }
    else{
        return dp[n][m]=Math.max(lcs(s1,s2,n,m-1),lcs(s1,s2,n-1,m))
    }

}
let dp=new Array(s1.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(s2.length+1).fill(-1)
}
let lcsLength=lcs(s1,s2,s1.length,s2.length)
let totalLength=s1.length;
let deletionsRequired=totalLength-lcsLength
console.log("No of deletions required to make string palibdrome :",deletionsRequired)