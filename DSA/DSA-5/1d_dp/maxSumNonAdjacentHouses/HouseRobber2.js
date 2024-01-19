// A thief needs to rob money in a street. The houses in the street are arranged in a circular manner. Therefore the first and the last house are adjacent to each other. The security system in the street is such that if adjacent houses are robbed, the police will get notified.

// Given an array of integers “Arr” which represents money at each house, we need to return the maximum amount of money that the thief can rob without alerting the police.

// Examples
let arr=[2,3,2]
console.log(maxSum2(arr))
function maxSum2(arr)
{ let dp=new Array(arr.length)
//   if(n<0)
//   {
//     return 0
//   } 
  //let m  
  dp[0]=arr[0]
  for(let i=1;i<dp.length;i++)
  {
    let pick=arr[i]
    if(i-2>=0)
    {
        pick+=dp[i-2]
    }
    let notpick=0
    if(i-1>0)
    {
        notpick+=dp[i-1]
    }
     dp[i]=Math.max(pick,notpick)

  }
console.log(dp)
return dp[arr.length-1]  
}
let last=arr.slice(0,arr.length-1)
let first=arr.slice(1)
console.log(first,last)
let withoutFirst=maxSum2(first)
let withoutLast=maxSum2(last)
console.log(withoutFirst,withoutLast)
let ans=Math.max(withoutFirst,withoutLast)
console.log(ans)