// Description
// Assessment
// Problem Description
// You are given a positive integer 'N'. You have to find the sum of first 'N' natural numbers.

// Input format
// First line contains an integer - N.

// Output format
// Print the sum of first N natural numbers.

// Sample Input 1
// 10

// Sample Output 1
// 55

// Explanation
// 1+2+3+4+5+6+7+8+9+10 = 55

// Constraints
// 1 <= N <= 10^4

function sum(n)
{
    let acc=0
    for(let i=1;i<=n;i++)
    {
    acc+=i;
    }
    return acc;
}
let reader=require("readline-sync")
let n=reader.question("enter number :")
console.log(sum(n))