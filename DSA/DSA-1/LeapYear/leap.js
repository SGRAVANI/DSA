// Problem Description
// For an input year N, find whether the year is a leap or not.

// Prerequisite : Knowledge of modulus operation.

// Input format
// First line contains an integer - N.

// Output format
// Print "true" if it is a leap year otherwise "false".

// Sample Input 1
// 1600

// Sample Output 1
// true

// Explanation
// Year 1600 is a leap year

// Sample Input 2
// 1800

// Sample Output 2
// false

// Explanation
// Year 1800 is not a leap year

// Constraints
// 1 <= N <= 9999
function checkLeap(y)
{
    if(y%400==0 || (y%100!==0 && y%4==0))
    {
        return true;
    }
    else{
        return false
    }
}
let reader=require("readline-sync")
let y=reader.questionInt("enter year:")
console.log("is leap year :",y,checkLeap(y))