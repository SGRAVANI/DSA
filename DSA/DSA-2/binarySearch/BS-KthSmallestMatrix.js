//Problem Description
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

 // 3 8

let matrix=[[1, 5, 9],
[ 10, 11,13],
[12, 13, 15]]
let nthtarget=8
console.log(bs(matrix,nthtarget))
function rowWiseCount(matrixRow,mid)
{
    let c=0;
    for(let i=0;i<matrixRow.length;i++)
    {
        if(matrixRow[i]<=mid)
        {
            c++
        }
    }
    return c;
}
function getNoOfEleLessThanMid(matrix,mid)
{
    let count=0;
    for(let row=0;row<matrix.length;row++)
    {
        if(matrix[row][0]>mid)
        {
            break;
        }
        else if(matrix[row][0]<=mid && matrix[row][matrix[0].length-1]<=mid)
        {
            count+=matrix.length
        }
        else if(matrix[row][0]<=mid && matrix[row][matrix[0].length-1]>mid)
        {
            count+=rowWiseCount(matrix[row],mid)
        }
    }
    return count;
}
function bs(matrix,k)
{
    let low=matrix[0][0];
    let high=matrix[matrix.length-1][matrix[0].length-1];
   let res=-1
    while(low<=high)
    {
        let mid=low+Math.floor((high-low)/2)
        let noOfEle=getNoOfEleLessThanMid(matrix,mid);
        if(noOfEle==k)
        {
            res=mid;
            high=mid-1;
        }  
        else if(noOfEle<k)
        {

            res=mid;
            low=mid+1;
        }
        else if(noOfEle>k)
        {
            res=mid;
            high=mid-1;
        }    
    
    }
    return res;
}