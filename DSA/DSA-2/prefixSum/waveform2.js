// Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
// In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

// If there are multiple solutions, find the lexicographically smallest one.

// Note:The given array is sorted in ascending order, and you don't need to return anything to make changes in the original array itself.

// Example 1:

// Input:
// n = 5
// arr[] = {1,2,3,4,5}
// Output: 2 1 4 3 5
// Explanation: Array elements after 
// sorting it in wave form are 
// 2 1 4 3 5.
// Example 2:

// Input:
// n = 6
// arr[] = {2,4,7,8,9,10}
// Output: 4 2 8 7 10 9
// Explanation: Array elements after 
// sorting it in wave form are 
// 4 2 8 7 10 9.
// Your Task:
// The task is to complete the function convertToWave(), which converts the given array to a wave array.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ n ≤ 106
// 0 ≤ arr[i] ≤107
class Solution {
    // arr: input array
    // n: size of array
    //Function to sort the array into a wave-like array.
    convertToWave(n, arr)
    {
        //your code here
        //let i=0;
      //  1 2 3 4 5 6 7 8
        //2 1 4 3 6 5 8 7
        
        for(let i=0;i<n;i+=2)
        {
            if(arr[i+1])
            {
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
      //  console.log(arr)
        return arr
    }
}
let s1=new Solution();
console.log(s1.convertToWave(5,[1,2,3,4,5]))
