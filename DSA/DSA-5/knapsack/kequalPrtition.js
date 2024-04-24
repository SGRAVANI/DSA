
// Code
// Testcase
// Testcase
// Test Result
// 698. Partition to K Equal Sum Subsets
// Attempted
// Medium
// Companies
// Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

 

// Example 1:

// Input: nums = [4,3,2,3,5,2,1], k = 4
// Output: true
// Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
// Example 2:

// Input: nums = [1,2,3,4], k = 3
// Output: false
 

// Constraints:

// 1 <= k <= nums.length <= 16
// 1 <= nums[i] <= 104
// The frequency of each element is in the range [1, 4].

let  nums = [4, 3, 2, 3, 5, 2, 1];
let  k = 4
let sum=nums.reduce((s,ele)=>s+ele,0)
console.log(sum,k,sum/k)
if(sum%k!=0)
{
    console.log(false,"reached here")
   
}

let visited=new Array(nums.length).fill(0)
console.log(visited)
let ans=solve(nums,1,k,sum/k,visited,0,0)
//console.log(visited)
console.log(ans)
function solve(nums,curBucket,noOfBucket,requiredSum,visited,sum,i)
{
    if(curBucket>noOfBucket)
    {
        return true
    }
    if(sum==requiredSum)
    {console.log(sum, curBucket)
        return solve(nums,curBucket+1,noOfBucket,requiredSum,visited,0,0)
    }

    if(sum>requiredSum)
    {
        return false;
    }
    if(i>=nums.length)
    {
     return false   
    }
    
    
    if(visited[i]==1)
    {
        return solve(nums,curBucket,noOfBucket,requiredSum,visited,sum,i+1)
        
    }
    else {
    visited[i]=1
    sum=sum+nums[i]
    let pick=solve(nums,curBucket,noOfBucket,requiredSum,visited,sum,i+1)
    sum=sum-nums[i]
    visited[i]=0
    let notpick= solve(nums,curBucket,noOfBucket,requiredSum,visited,sum,i+1)
    return notpick||pick
    }
}


// function canPartitionKSubsets(nums, k) {
//     const totalSum = nums.reduce((acc, num) => acc + num, 0);
//     const targetSum = totalSum / k;
//     if (totalSum % k !== 0) {
//         return false;
//     }
    
//     const alreadyPicked = new Array(nums.length).fill(0);
    
//     return isPossible(0, 1, 0, nums, k, alreadyPicked, targetSum);
// }

// function isPossible(i, bucketNum, bucketSum, nums, k, alreadyPicked, targetSum) {
//     if (bucketNum > k) {
//         return true;
//     }
//     if (bucketSum === targetSum) {
//         console.log(bucketSum,bucketNum)
//         return isPossible(0, bucketNum + 1, 0, nums, k, alreadyPicked, targetSum);
//     }
//     if (bucketSum > targetSum) {
//         return false;
//     }
//     if (i >= nums.length) {
//         return false;
//     }
    
//     if (alreadyPicked[i] === 1) {
//         return isPossible(i + 1, bucketNum, bucketSum, nums, k, alreadyPicked, targetSum);
//     } else {
//         // pick
//         bucketSum += nums[i];
//         alreadyPicked[i] = 1;
//         const op1 = isPossible(i + 1, bucketNum, bucketSum, nums, k, alreadyPicked, targetSum);
//         bucketSum -= nums[i];
//         alreadyPicked[i] = 0;
        
//         // skip
//         const op2 = isPossible(i + 1, bucketNum, bucketSum, nums, k, alreadyPicked, targetSum);
        
//         return op1 || op2;
//     }
// }

// // Test cases
// console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)); // Output: true
// console.log(canPartitionKSubsets([1, 2, 3, 4], 3)); // Output: false