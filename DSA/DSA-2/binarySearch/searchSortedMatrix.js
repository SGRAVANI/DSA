// 74. Search a 2D Matrix
// Solved
// Medium
// Topics
// Companies
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 let  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
 let target = 3;
 function bs(matrix,target)
 {
    let row=0
    let col=matrix[0].length-1;
    while((row>=0 && row<=matrix.length-1)&&(col>=0 && col<=matrix[0].length-1))
    {
        if(matrix[row][col]==target)
        {
            return true
        }
        else if(target<matrix[row][col])
        {
            col--;
        }
        else if(target>matrix[row][col])
        {
        row++;
        }
    }
    return false
 }
 console.log(bs(matrix,target))
 console.log(bs(matrix,13))