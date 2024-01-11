//optimized space complexity by only using two rows to store dp table
//table dimension dp[2][W]
//space complexity: O(2*W)= O(W)
let weight=[1,3,2,5,6]
let val=[1,4,5,7,1]
let cap=7
let n=5
function knapsack(weight,val,n,cap)
{
    let dp=new Array(2);  // 2 rows
    for(let i=0;i<dp.length;i++)
    {
        dp[i]=new Array(cap+1)
    }
    
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;  // Initialize first row and first column to 0
            }
        }
    }
       // console.log(dp)
        let prev=0
        for(let i=1;i<n+1;i++)
        {
            let cur=1-prev;
            for(let j=1;j<cap+1;j++)
            {
              if(weight[i-1]<=j)
              {
                dp[cur][j]=Math.max(val[i-1]+dp[prev][j-weight[i-1]],dp[prev][j])
              }
              else{
                dp[cur][j]=dp[prev][j]
              }
            }
            prev=1-prev;
        }
    
    console.log(dp,prev)
    if(n%2==0)  //for even #of items last row will be 0 after toggling
    {
        return dp[0][cap]
    }
    else{
        return dp[1][cap] //for odd #of items cur will be at row 1 after toggling 
    }
    
}
console.log(knapsack(weight,val,n,cap))