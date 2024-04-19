let nums=[2,3,1,1,4]
let ans=false;
// function solve(nums,i)
// {
// if(i==nums.length-1)
// {
//     console.log("true reached")
//     ans=ans||true
//     console.log(ans)
//     return true

// }
// if(i>nums.length-1)
// {
//    ans=ans||false   ;
//    console.log(ans)
//    return
// }
// let val=nums[i]
// //console.log(val)
// for(let j=1;j<=val;j++)
// {
//     console.log(val,j,i+j)
//     solve(nums,i+j)
// }
// }



// ans=false;
// solve(nums,0)
// console.log(ans)

// function solve(nums,idx)
// {

//    if(idx<=0)
//    {
//     return true
//    }

//     if(nums[idx]>0)
//     {
//         for(let i=1;i<=nums[idx];i++)
//         {
//             return solve(nums,idx-i)
//         }
//     }
// }
// nums=[3,2,1,0,4]
//  ans=false;
// ans=solve(nums,nums.length-1)
// if(!ans)
// {
//     console.log(false)
// }
// else{
//     console.log(true)
// }
//console.log(solve(nums,nums.length-1))



//memorization

// function solve(nums,idx,dp)
// {

//    if(idx>=nums.length-1)
//    {
//     return true
//    }
//    if(idx<nums.length-1 && nums[idx]==0)
//    {
//     return false
//    }
// if(dp[idx]!=-1)
// {
//     return dp[idx]
// }
//     if(nums[idx]>0)
//     {
//         for(let i=1;i<=nums[idx];i++)
//         {
//              ans= solve(nums,idx+i,dp)
//              if(ans==true)
//              {
//                 return dp[idx] = true
//              }
//         }
//         return dp[idx]= false
//     }
// }


//bottom up


// function solve(nums)
// {
// let dp=new Array(nums.length).fill(-1)
// dp[0]=true

// for(let i=1;i<nums.length;i++)
// {
//     let f=false
//     let j=i-1;
//     while(j>=0)
//     {
//         if(nums[j]>=i-j)
//         {
//             f=true
//             //dp[i]=true;
//             break;
//         }
//         j--;
//     }
//     dp[i]=f;
// }
// console.log(dp)
// console.log(dp[dp.length-1])
// }



//memory optimization is not possible with previous approach
//another bottomup approach
function solve(nums)
{
    let maxReachable=0
    for(let i=0;i<nums.length;i++)
    {
        
        if(i==maxReachable && nums[i]==0 && i<nums.length-1)
        {
            return false
        }
    }
    return true
}






//nums=[3,2,1,0,4]
 nums=[2,3,1,1,4]
// ans=false;
 //let dp=new Array(nums.length+1).fill(-1)
//solve(nums,0,dp)
//console.log(ans)
// if(!ans)
// {
//     console.log(false)
// }
// else{
//     console.log(true)
// }
console.log(solve(nums))