// Problem Description
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input format
// First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

// Second line of input contains N integers denoting the array elements.

// Output format
// Print the maximum sum of a subarray of size k.

// Sample Input 1
// 4 2

// 100 200 300 400

// Sample Output 1
// 700

// Explanation
// We get maximum sum by adding subarray {300,400}

// of size 2.

// Constraints
// 1<=K<=N<=100000

// 0<=abs(arr[i])<=10000

// Resource
let arr=[100, 200, 300, 400]
let k=2;
let sum=0
let maxSum=-Infinity
let i;
for( i=0;i<k;i++)
{
 sum=sum+arr[i]
}
maxSum=sum
let j=i;
let pt1=0;
while(j<arr.length)
{
sum+=arr[j]
sum-=arr[j-k];
maxSum=Math.max(maxSum,sum)
pt1++;
j++;
}
console.log(sum)
