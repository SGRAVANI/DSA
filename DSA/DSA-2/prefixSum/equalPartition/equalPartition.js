// Problem Description
// Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

// Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

// Return the index of the partitioning element. If no such element exists, return -1.

// Input format
// There are N+1 lines of input.

// First line will contain a single integer N.

// Second line will contain n space separated integer representing array elements.

// Output format
// Output the index of the partitioning element.

// Constraints
// 2 <= N <= 10^6

// 1 <= Arr[i] <= 10^9

// Sample Input 1
// 4

// 1 4 2 5

// Sample Output 1
// 2

// Explanation 1
// Since 1 + 4 = 5 where 2 is such an element.

// Resource
// Find an element in array such that sum of left array is equal to sum of right array
// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video

//brute force
let arr=[1, 4, 2 ,5]
for(let i=1;i<arr.length;i++)
{
    let leftsum=0
    for(let j=0;j<i;j++)
    {
        leftsum+=arr[j]
    }
    let right=0;
    for(let j=i+1;j<arr.length;j++)
    {
        right+=arr[j]
    }
    if(leftsum==right)
    {
        console.log(arr[i])
    }
}
// complexity:O(n^2)
//solution using prefix
let prefix=[]
prefix[0]=arr[0]
let sum=0
for(let i=1;i<arr.length;i++)
{
    prefix[i]=arr[i]+prefix[i-1]
}
let suffix=[]
suffix[arr.length-1]=arr[arr.length-1]
for(let i=arr.length-2;i>=0;i--)
{
    suffix[i]=suffix[i+1]+arr[i]
}
console.log(prefix,suffix)

for(let i=0;i<arr.length;i++)
{
    if(prefix[i]==suffix[i])
    {
        console.log("equal partion element is ",arr[i],"and index is ",i)
        break;
    }
}