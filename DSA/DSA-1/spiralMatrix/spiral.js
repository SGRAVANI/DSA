// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

// Input format
// One line of input, containing a single integer A.

// Output format
// Print a 2-d matrix of size A x A satisfying the spiral order.

// Sample Input 1
// 3

// Sample Output 1
// 1 2 3

// 8 9 4

// 7 6 5

// Explanation
// As you can see the matrix goes spirally with each next position incremented by one.

// Constraints
// 1<=A<=1000
let reader=require("readline-sync")
let n=reader.questionInt("enter number :")
function generateMatrix(n)
{
    let matrix=[]
    let val=1;
    for(let i=0;i<n;i++)
    {
        let row=new Array()
        for(let j=0;j<n;j++)
        {
        row.push(val);
        val++;
        }
        matrix.push(row)
    }
    return matrix;
}
let matrix=generateMatrix(n)
console.log(matrix)
spiral(n)
function spiral(n)
{
    let matrix=[];
    for(let i=0;i<n;i++)
    {
        matrix[i]=new Array()
    for(let j=0;j<n;j++)
    {
     matrix[i][j]=0
    }
    }
   // console.log(matrix)
    let leftCol=0;
    let rightCol=n-1;
    let topRow=0;
    let bottomRow=n-1;
    let val=1;
    while(val<=n*n)
    {
        //first row;
        for(let j=leftCol;j<=rightCol;j++ )
        {
            
         matrix[topRow][j]=val;
         val++;
        }
        // console.log(matrix[topRow])
        topRow++;
        for(let x=topRow;x<=bottomRow;x++)
        {
        matrix[x][rightCol]=val;
        val++;
        }
        rightCol--;

        for(let j=rightCol;j>=leftCol;j--)
        {
         matrix[bottomRow][j]=val;
         val++;
        }
        bottomRow--;
        for(let x=bottomRow;x>=topRow;x--)
        {
        matrix[x][leftCol]=val;
        val++;
        }
        leftCol++;
        
    }
    console.log(matrix)
}