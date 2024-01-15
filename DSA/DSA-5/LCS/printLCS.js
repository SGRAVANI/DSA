let s1="abcjklp"
let s2="acjkp"
//sol should be acjkp
let dp=new Array(s1.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(s2.length+1).fill(-1)
}
function printLCS(s1,s2,n,m)
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
        return dp[n][m]=1+printLCS(s1,s2,n-1,m-1)
    }
    else{
        return dp[n][m]=Math.max(printLCS(s1,s2,n,m-1),printLCS(s1,s2,n-1,m))
    }
}
console.log(printLCS(s1,s2,s1.length,s2.length))
printLCS(s1,s2,s1.length,s2.length)
console.log(dp)
let i=s1.length;
let j=s2.length
let maxLengthSeq=""
while(i>0 && j>0)
{
    if(dp[i][j]==dp[i-1][j])
    {
        i=i-1
    }
    else if(dp[i][j]==dp[i][j-1])
    {
        j=j-1
    }
    else{
        maxLengthSeq=s1[i-1]+maxLengthSeq
        i--;
     j--;
    }


}
console.log(maxLengthSeq)