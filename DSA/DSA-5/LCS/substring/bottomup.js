// let s1="abcde"
// let s2="abfce"
let s1="abcjklp"
s2="acjkp"
function findLongestCommonSubstring(s1,s2,n,m)
{
  
    let dp=new Array(n+1)
   // console.log(n,m),dp
   let ans=0;
   let dpRow,dpCol;
    for(let i=0;i<dp.length;i++){
        dp[i]=new Array(m+1)
    }
    for(let i=0;i<dp.length;i++)
    {
        for(let j=0;j<dp[i].length;j++)
        {
            // dp[i][j]=0
            if(i==0||j==0)
            {
                dp[i][j]=0
            }
            else{
                if(s1[i-1]==s2[j-1])
                {
                    dp[i][j]=1+dp[i-1][j-1]
                    if(ans<dp[i][j])
                    {
                        ans=dp[i][j]
                        dpRow=i;
                        dpCol=j
                    }
                }
                else{
                    dp[i][j]=0
                }
            }
        }
    }
    // for(let i=1;i<dp.length;i++)
    // {
    //     for(j=1;)
    // }
    console.log(dp,ans,dpRow,dpCol)
    //printing longest common string
    let i=dpRow;
    let j=dpCol;
    let str=''
    while(i>0 && j>0 && dp[i][j]!=0)
    {
        str=s1[i-1]+str;
        i--;
        j--;
    }
    console.log("longest common substring is :",str,"\n length is : ",ans)
}
console.log(s1.length,s2.length)
findLongestCommonSubstring(s1,s2,s1.length,s2.length)