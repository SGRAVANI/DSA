// Problem Description
// Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// Input format
// There are 2 lines of input.

// First line contains an integer N ,the number of input integers in the array.

// Second line contains N space separated integers.

// Output format
// N space separated elements which satisfy the given condition.

// Sample Input 1
// 6

// 1 5 1 1 6 4

// Sample Output 1
// 1 4 1 5 1 6

// Explanation 1
// nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].

// Constraints
// 1 <= N <= 100000

// -10^9 <= A[i] <= 10^9

// Resource
// Sort an array in wave form

// Video : Sort an array in wave form

// Note that the structure of the expected answer used in the resources and in our question are slightly different. In the resources, the even position elements are the larger ones. In our question, the elements at odd positions are the larger ones.

// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video

let arr=[1, 5, 1, 1, 6, 4,7]
//arr.sort((a,b)=>a-b)
let i=1
//let j=arr.length-1;
for(let i=1;i<arr.length;i+=2)
{
    if(arr[i]<arr[i-1])
    {
[arr[i],arr[i-1]]=[arr[i-1],arr[i]]
    }
    if(arr[i]<arr[i+1])
    {
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
    }
}
//
console.log(arr)