// Problem Description
// Given an m x n matrix, if an element is 0, set its entire row and column to 0.

// Do it in-place, that is, modify the same matrix. Do not create a new one.

// Input format
// First line contains 2 integers m,n - number of rows and columns respectively.

// Next m lines contain space separated n integers.

// Output format
// Output the same matrix.

// Sample Input 1
// 3 3

// 1 1 1

// 1 0 1

// 1 1 1

// Sample Output 1
// 1 0 1

// 0 0 0

// 1 0 1

// Explanation 1
// There is one ‘0’ in the 2nd row and 2nd column, so all the elements in that row and column become 0.

// Sample Input 2
// 3 4

// 0 1 2 0

// 3 4 5 2

// 1 3 1 5

// Sample Output 2
// 0 0 0 0

// 0 4 5 0

// 0 3 1 0

// Explanation 2
// The 1st row, 1st column and 4th column all contain ‘0’, so all the values in these rows & columns become 0.
let m=[
   [ 0 ,1, 2, 0],

[3, 4, 5, 2],

[1, 3, 1, 5]

]
setRowCol0(m)
function setRowCol0(mat)
{
    let zeroRow=new Set()
    let zeroCol=new Set()
    for(let i=0;i<mat.length;i++)
    {
        for(let j=0;j<mat[i].length;j++)
        {
            if(mat[i][j]==0)
            {
                zeroRow.add(i);
                zeroCol.add(j)
            }
        }
    
    }
    console.log(zeroRow,zeroCol,zeroRow.size)
    // for(let ele of zeroCol)
    // {
    //     console.log(ele)
    // }
for(let ele of zeroRow)
{
    for(let j=0;j<mat[0].length;j++)
    {  console.log(mat[ele][j])
        mat[ele][j]=0
    }
}
for(let ele of zeroCol)
{
    for(let i=0;i<mat.length;i++)
    {
        mat[i][ele]=0
    }
}
console.log(mat)
}
