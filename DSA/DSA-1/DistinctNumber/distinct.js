// Problem Description
// You are given a list of n integers, and your task is to calculate the number of distinct values in the list.

// Input format
// The first input line has an integer n: the number of values.

// The second line has n integers x1,x2,…,xn.

// Output format
// Print number of distinct values in the list.

// Sample Input 1
// 5

// 2 3 2 2 3

// Sample Output 1
// 2

// Explanation
// There are two distinct values in the list which are 2 and 3.

let reader=require('readline-sync')
let n=reader.questionInt("enter total numbers you want to store in array")
let ele;
let arr=[]
for(let i=0;i<n;i++)
{
    ele=reader.question("enter ele");
   arr.push(ele)
}
console.log(arr)

function findDistict(arr)
{

    let s=new Set(arr);
    console.log(s)
    return s.size;
}
console.log(findDistict(arr))