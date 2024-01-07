// Problem Description
// Given a matrix of dimensions n x n having elements 1 to n*n distinct elements, check whether the matrix is magic square or not.

// Magic square is a square that has the same sum along all rows, columns and diagonals.

// Input format
// There are n + 1 lines of input.

// First line contains integer n.

// The next n lines contain n space separated elements.

// Output format
// Print "Yes" if it is a magic square , "No" otherwise.

// Sample Input 1
// 3

// 4 9 2

// 3 5 7

// 8 1 6

// Sample Output 1
// Yes

// Explanation 1
// All rows, columns and diagonals have sum 15.
let mat1=[
    [4,9,2],
    [3,5,7],
    [8,1,6]
];
let mat2=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// let reader=require("readline-sync");
function checkMagicSquare(n,mat)
{
    let pdia=0
    let secdia=0;

    for(let i=0;i<n;i++)
    {
    pdia+=mat[i][i];
    secdia+=mat[i][n-1-i];

    }
 //check for rows & columns

 for(let i=0;i<n;i++)
 {
    let rsum=0;
    let csum=0;
    for(let j=0;j<n;j++)
    {
        rsum=rsum+mat[i][j];
        csum=csum+mat[j][i];
    }
    if(rsum!=csum || rsum!=pdia ||rsum!=secdia ||csum!=pdia||csum!=secdia)
    {
        return false;
    }
 }
 return true;   
}
let r=checkMagicSquare(3,mat1)
if(r)
{
    console.log(mat1,"matrix is magic square")
}
else{
    console.log("Not magic square")
}
console.log(checkMagicSquare(3,mat2))

r=checkMagicSquare(3,mat1)
if(r)
{
    console.log(mat1,"matrix is magic square")
}
else{
    console.log("Not magic square")
}
r=checkMagicSquare(3,mat2)
if(r)
{
    console.log(mat2,"matrix is magic square")
}
else{
    console.log("Not magic square")
}