// Problem Description
// Given a number n, you have to print a triangle-shaped pattern with n rows using space separated '*'.

// For eg. if n = 4 pattern will be:

// *
// **
// ***
// ****
// You will have to return an array of strings, with each element of the array representing one row of the pattern.

// Input format
// There is one line of input, containing an integer n, the number of rows.

// Output format
// Print the pattern as described.

// Sample Input 1
// 4

// Sample Output 1
// *
// **
// ***
// ****
function print(n)
{
    let p=""
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=i;j++)
        {
        p+="*"
        }
        if(i!=n)
        {
        p+="\n"
        }
    }
    console.log(p)
}
let reader=require("readline-sync")
let n=reader.questionInt("enter number of rows :")
print(n)