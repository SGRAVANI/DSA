let str="11111111111111111111111111111111111111111111111111"
let dp=new Array(str.length+1);
for(let i=0;i<dp.length;i++)
{
    dp[i]=-1
}
function NoOfcomb(str,i)
{
    let ans;
    if(i==str.length)
    {
        return 1;
    }
    if(str[i]==0)
    {
        return 0;

    }
    if(dp[i]!=-1)
    {
        return dp[i];
    }
    else{
        let twodigit=str[i] + str[i + 1];
        if(twodigit<=26)
        {
            return dp[i]=NoOfcomb(str,i+1)+NoOfcomb(str,i+2)
        }
        else{
            return dp[i]=NoOfcomb(str,i+1)
        }
    }

}
console.log(NoOfcomb(str,0)%1000000007)