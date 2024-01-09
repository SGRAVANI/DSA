// Problem Description
// Given an unsorted array of integers, find the smallest missing positive integer. The space complexity need not be O(1), you can also implement a O(N) space complexity solution.

// Input format
// There are 2 lines of input.

// First line contains 1 integer N - Number of elements in the array.

// Second line contains space separated N integers.

// Output format
// Print the smallest missing positive integer.

// Sample Input 1
// 4

// 3 4 -1 1

// Sample Output 1
// 2

// Explanation 1
// 2 is the smallest positive integer which is missing as 1 is already present in the array. Note that 0 will not be considered as positive.

// Constraints
// N <= 200000

// -2 ^ 31 <= Range of values <= 2 ^ 31 - 1

// Resource
let arr=[3 ,4 ,-1 ,1]
function findMisingNum(arr)
{
    let o={}
    for(let i=0;i<arr.length;i++)
    {
   o[arr[i]]=1;
    }
    for(let i=1;i<arr.length;i++)
    {
        if(o.hasOwnProperty(i)==false)
        {
         console.log("Missing value is :",i);
         break;
        }
    }
}
findMisingNum(arr)