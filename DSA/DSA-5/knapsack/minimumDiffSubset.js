function sumofSubset(nums,sum,n)
{ console.log(sum)
    let dp=new Array(n+1)
    for(let i=0;i<=n;i++ )
    {
        dp[i]=new Array(sum+1)
    }
    for(let i=1;i<=sum;i++)
    {
        dp[0][i]=false
    }
    for(let i=0;i<=n;i++)
    {
        dp[i][0]=true
    }
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=sum;j++)
        {
            if(nums[i-1]<=sum)
            {
                let pick=dp[i-1][j-nums[i-1]]
                let notpick=dp[i-1][j]
                dp[i][j]=pick||notpick
            }
            else{
                dp[i][j]=dp[i-1][j]
            }
        }
    }
    let lastRow=[]
    console.log(sum/2)
    for(let i=0;i<=Math.floor(sum/2);i++)
    {
     if(dp[n][i]==true)
     {
        lastRow.push(i)
     }
    }
    //console.log(lastRow)
    let min=Infinity
    for(let i=0;i<lastRow.length;i++)
    {
        let s1=lastRow[i]
        let s2=(sum-s1)
        let diff=Math.abs(s2-s1);
        min=Math.min(min,diff)
    }
    console.log(min)
}
let nums=[3,9,7,3]
let sum=nums.reduce((s,ele)=>s+ele)

sumofSubset(nums,sum,nums.length)
