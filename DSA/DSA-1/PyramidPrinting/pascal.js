// Problem Description
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Pascal’s triangle is a pattern in which a number in a row b, is the sum of the number exactly above it a, and the number to the left of a, c.

// This makes the Pascal’s triangle all powers of 11 written row by row, except for the first row, which is 1.

// 1

// 11

// 11^2 = 121

// 11^3 = 1331

// And so on.

// Input format
// One line of input, containing the non negative integer N.

// Output format
// Print the first N rows of Pascal’s triangle.

// Sample Input 1
// 5

// Sample Output 1
// 1

// 1 1

// 1 2 1

// 1 3 3 1

// 1 4 6 4 1
function pascal(n)
{
    let r=[]
    r.push(1)
    for(let i=1;i<n;i++)
    {
         r[i]=new Array()
     
         r[i].push(1)
     for(let j=1;j<i;j++)
     {
      r[i].push(r[i-1][j]+r[i-1][j-1])
     }
     r[i].push(1);
    }
    let row=''
    for(let i=0;i<r.length;i++)
    {
        
        for(let j=0;j<r[i].length;j++)
        {
        row+=String(r[i][j])+" ";
        }
        row+="\n"
    }
    console.log(row)
}
let reader=require('readline-sync')
let n=reader.questionInt("enter number of rows")

pascal(n)