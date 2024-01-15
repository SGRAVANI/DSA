// Longest Palindromic Subsequence
// Given a sequence, find the length of the longest palindromic subsequence in it.
// Example :
// Input:"bbbab"
// Output:4
// solution:
// 1. let s2=revrse of s1
// 2. find lcs length of s1 and s2
// 3. ans of lcs length will be longest palindromic subsequence length
let s1="aagbcba"
let s2=s1.split('').reverse().join('');
console.log(s2)
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
console.log("longst Palindiromc string length is :",lcsLength)