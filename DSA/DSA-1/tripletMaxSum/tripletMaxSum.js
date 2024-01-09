// Problem Description
// Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

// Input format
// There are 2t+1 lines of input

// First line contains an integer t - No of test cases.

// First line of each test case contains an integer n - No of elements in the array.

// Second line of each test case contains N space separated integers - The array nums.

// Output format
// For each test case print the answer in a new line.

// Sample Input 1
// 3

// 7

// 3 7 4 2 5 7 5

// 4

// 5 2 4 5

// 3

// 3 2 1

// Sample Output 1
// 16

// 11

// 0

// Explanation 1
// In the first case valid triplets are: [3,4,5], [3,4,7], [4,5,7], [2,5,7]. Out of these [4,5,7] has the maximum sum, 16.

// In the second case, it’s [2, 4, 5] with sum 11.

// In the third case there are no valid triplets.

let arr=[3 ,7, 4, 2, 5, 7, 5]
maxSumTriplet(arr)
maxSumTriplet([3 ,2 ,1])
function maxSumTriplet(a)
{
    let maxSum=0
   
    for(let i=1;i<a.length;i++)
    {
        let first=-1;
        let last=-1; 
    for(let j=0;j<i;j++)
    {
        if(a[j]<a[i]  )
        {
        first=Math.max(first,a[j])
        }
    }
    for(let j=i+1;j<=a.length-1;j++)
    {
        if(a[i]<a[j])
        {
            last=Math.max(last,a[j])
        }
    }
     if(first!=-1 && last!=-1)
     {
        maxSum=Math.max(maxSum,first+last+a[i])
        console.log('triplet','[',first,a[i],last,']')
     }
    }

    console.log(maxSum)
}