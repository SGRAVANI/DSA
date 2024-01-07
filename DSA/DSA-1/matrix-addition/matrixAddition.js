// Given two matrices of dimension n x m, add the two matrices and print the resultant matrix.

// Input format
// There are 2n+1 lines of input.

// First line contains two space separated integers n, m.

// In the next 2n lines, each line contains m elements. The first n lines are for the first matrix, next n for the second matrix.

// Output format
// Print the resultant matrix.

// Sample Input 1
// 2 2

// 1 2

// 3 4

// 1 1

// 1 1

// Sample Output 1
// 2 3

// 4 5

// Constraints
// 1 <= n,m <= 100

// 0 <= element of matrices <= 100000
let mat1=[
 [1,2],
 [3,4]   
]
let mat2=[[1,1],
[1,1]]
function matrixAddition(m1,m2)
{
    let resultMat=[]
    for(let i=0;i<m1.length;i++)
    {
         resultMat[i]=new Array(m1[i].length);
        for(let j=0;j<m1[i].length;j++)
        {
        resultMat[i][j]=m1[i][j]+m2[i][j]
        }

    }
    return resultMat;
}
let r=matrixAddition(mat1,mat2)
console.log(r)