// Problem Description
// Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

// Input format
// There are 3 lines of input.

// First line contains an Integer N that represents the number of elements in the array.

// Second line contains N space separated integers, which are members of the array.

// Third line contains an integer X, which is the target value.

// Output format
// Print "Present" if there is such a pair present in the array otherwise print "Not Present".

// Constraints
// 2 <= Length of array <= 10^5

// 1 <= Range of values <= 10^6

// Sample Input 1
// 5 --> Number of elements in array

// 2 4 5 8 9 --> Array elements

// 7 --> Target sum value

// Sample Output 1
// Present

// Explanation 1
// Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen
let arr=[2, 4, 5, 8, 9]
let reader=require("readline-sync")
let tagetSum=reader.questionInt("enter sum :");
function sumPair(arr,target)
{
    let o={}
    for(let ele of arr)
    {
        o[ele]=1;
    }
    for(let i in arr)
    {
        if(o.hasOwnProperty(target-arr[i]))
        {
            return "Present"
        }
    }
    return "not Present";
}
console.log(sumPair(arr,tagetSum))
