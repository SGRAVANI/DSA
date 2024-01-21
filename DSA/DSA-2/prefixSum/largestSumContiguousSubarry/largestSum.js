// Problem Description
// Given an array, find a non-empty contiguous subarray with the largest sum.

// Input format
// There are 2 lines of input.

// First line contains N, the number of elements in the array.

// Second line contains N space separated numbers, representing the array elements.

// Output format
// A single integer which is the maximum possible contiguous subarray sum

// Constraints
// 1 ≤ N ≤ 10^5

// -10^9 ≤ A[i] ≤ 10^9

// Sample Input 1
// 8

// -2 -3 4 -1 -2 1 5 -3

// Sample Output 1
// 7

// Explanation 1
// The subarray [4 -1 -2 1 5] has sum 7, which is the maximum possible.

// kadan's algorithm
let arr=[2,-3,4, -1, -2, 1, 5]
let sum=0
let maxSum=-Infinity
let start,end,startIndex,endIndex;
for(let i=0;i<arr.length;i++)
{
    if(sum==0)
    {
        startIndex=i
        start=arr[i]
    }
sum=sum+arr[i]

if(maxSum<sum)
{
    maxSum=sum;
    end=arr[i]
    endIndex=i
}
if(sum<0 )
{
    sum=0
}
}
console.log("Max sum",maxSum, "start Index",startIndex,"end Index",endIndex, "start value : ",start, "end Value : ",end,"sub array",arr.slice(startIndex,endIndex+1))