// Minimum number of deletions and insertions to transform one string into another
// Given two strings ‘str1’ and ‘str2’ of size m and n respectively. The task is to remove/delete and insert minimum number of characters from/in str1 so as to transform it into str2. It could be possible that the same character needs to be removed/deleted from one point of str1 and inserted to some another point.
// Example:
// Input : str1 = "geeksforgeeks", str2 = "geeks"
// Output : Minimum Deletion = 8
//          Minimum Insertion = 0 
let s1="heap"
let s2="pea"
let dp=new Array(s1.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(s2.length+1).fill(-1)
}
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
let lcsLength=lcs(s1,s2,s1.length,s2.length);
let noOfInsertions=s2.length-lcsLength;
let noOfDeletions=s1.length-lcsLength
console.log("minimum #of Insertions :",noOfInsertions,"Minimum #of deletions : ",noOfDeletions)