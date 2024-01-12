class Solution {
    //Function to count the number of partitions of the array into three parts with sum equal to D.
    countPartitions(n, diff, arr) {
        //your code here
        let sum=arr.reduce((sum,ele)=>sum+ele,0)
let s1=Math.floor((sum+diff)/2)
if(diff>sum ||(diff+sum)%2!=0 )
{
    return 0
}
let dp=new Array(arr.length+1)
for(let i=0;i<dp.length;i++)
{
    dp[i]=new Array(s1+1).fill(-1);
}
//console.log(dp)

  return this.countSubset(arr,n,s1,dp)
//console.log(this.countSubset(arr,n,s1,dp))

    }
    countSubset(arr,n,sum,dp)
{
    if(n==0 && sum==0)
    {
    return 1;
    }
    if(n==0&&sum>0)
    {
        return 0
    }
    if(n>0 && sum==0)
    {
        return 1;
    }
    if(dp[n][sum]!=-1)
    {
        return dp[n][sum]
    }
    else{
        if(arr[n-1]<=sum)
        {
        return dp[n][sum]=this.countSubset(arr,n-1,sum-arr[n-1],dp)+this.countSubset(arr,n-1,sum,dp)
        }
        else{
            return dp[n][sum]=this.countSubset(arr,n-1,sum,dp)
        }
    }
}
}
// let o=new Solution();
// let n=4;
// let diff= 3
// let arr=[5, 2, 6, 4]
// console.log(o.countPartitions(n,diff,arr))


// class Solution {
//     // Function to count the number of partitions of the array into three parts with sum equal to D.
//     countPartitions(n, diff, arr) {
//         // Your code here
//         let sum = arr.reduce((sum, ele) => sum + ele, 0);
//         let s1 = Math.floor((sum + diff) / 2);
//         let dp = new Array(n + 1);

//         for (let i = 0; i < dp.length; i++) {
//             dp[i] = new Array(s1 + 1).fill(-1);
//         }

//         // Call the countSubset method without bind
//         return this.countSubset(arr, n, sum, dp);
//     }

//     countSubset(arr, n, sum, dp) {
//         if (n == 0 && sum == 0) {
//             return 1;
//         }
//         if (n == 0 && sum > 0) {
//             return 0;
//         }
//         if (n > 0 && sum == 0) {
//             return 1;
//         }
//         if (dp[n][sum] != -1) {
//             return dp[n][sum];
//         } else {
//             if (arr[n - 1] <= sum) {
//                 return (dp[n][sum] = this.countSubset(arr, n - 1, sum - arr[n - 1], dp) + this.countSubset(arr, n - 1, sum, dp));
//             } else {
//                 return (dp[n][sum] = this.countSubset(arr, n - 1, sum, dp));
//             }
//         }
//     }
// }

// let o = new Solution();
// let n = 4;
// let diff = 3;
// let arr = [5, 2, 6, 4];
// console.log(o.countPartitions(n, diff, arr));


// class Solution {
//     // Function to count the number of partitions of the array into three parts with sum equal to D.
//     countPartitions(n, diff, arr) {
//         let sum = arr.reduce((sum, ele) => sum + ele, 0);
//         let s1 = Math.floor((sum + diff) / 2);
//         let dp = new Array(n + 1);

//         for (let i = 0; i < dp.length; i++) {
//             dp[i] = new Array(s1 + 1).fill(-1);
//         }

//         return this.countSubset(arr, n, s1, dp);
//     }

//     countSubset(arr, n, sum, dp) {
//         if (sum === 0) {
//             return 1;
//         }
//         if (n === 0 || sum < 0) {
//             return 0;
//         }
//         if (dp[n][sum] !== -1) {
//             return dp[n][sum];
//         } else {
//             if (arr[n - 1] <= sum) {
//                 return (dp[n][sum] = this.countSubset(arr, n - 1, sum - arr[n - 1], dp) + this.countSubset(arr, n - 1, sum, dp));
//             } else {
//                 return (dp[n][sum] = this.countSubset(arr, n - 1, sum, dp));
//             }
//         }
//     }
// }

let o = new Solution();
let n = 17;
let diff = 2;
let arr = [2 ,40, 6 ,6 ,43 ,44 ,10, 32, 12, 12, 26, 31, 48, 14, 38, 42 ,25];
console.log(o.countPartitions(n, diff, arr));