// Problem Description
// Given nxn matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Input format
// First line contains two integers. N, denoting the size of the square matrix and K where we have to find the Kth Smallest element.

// Next N lines contain N integers each denoting the elements of the matrix.

// Output format
// Single containing one integer denoting the Kth smallest element.

// Sample Input 1
// 3 8

// 1 5 9

// 10 11 13

// 12 13 15

// Sample Output 1
// 13

// Explanation 1
// If written in non-decreasing order, elements are,

// 1 5 9 10 11 12 13 13 15

// Hence, 8th smallest element is 13.

// Constraints
// 1<=N<=1000

// 0<=Ai<=10^9

// 1<=K<=N^2

// Resources

let matrix=[
[1, 5, 9],
[10, 11, 13],
[12, 13, 15],
]
let ele=5;
let count=0;
let r=[]
function flatArray(matrix)
{ 
  if(Array.isArray(matrix))
  {
    for(let i=0;i<matrix.length;i++)
    {
        if(Array.isArray(matrix[i]))
        {
            flatArray(matrix[i])
        }
        else{
            r.push(matrix[i])
        }
       
    }
  }
  else{
    r.push(matrix);
   }
}

//complexity for 2d matrix of flatArray function : n*m; where n is number of rows and m is number of columns
flatArray(matrix)
console.log(r)
r.sort((a,b)=>a-b)   //n*m log(n*m)
console.log(ele, "smallest ele is ",r[ele-1])

//total complexity n*mlog(n*m)