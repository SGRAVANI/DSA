// Problem Description
// Given coordinates of a point (x,y) in 2D plane, find in which quadrant does this point lie.

// Note: The problem provides floating point numbers as inputs.

// Input format
// First line contains 2 space separated real numbers - x coordinate, y coordinate.

// Output format
// Print 1, 2, 3 or 4 depending on in which quadrant does the point lie.

// Sample Input 1
// -5.5 2

// Sample Output 1
// 2

// Explanation 1
// The x-coordinate is negative and the y-coordinate is positive which means the point lies in the 2nd quadrant.

// Sample Input 2
// 1 -1

// Sample Output 2
// 4

function findQuadrant(x,y)
{
    if(x>0 && y>0)
    {
        return "First Quadrant";
    }
    else if(x>0 && y<0)
    {
        return "Fourth Quadrant";
    }
    else if(x<0 && y>0)
    {
        return "Second Quadrant"
    }
    else if(x<0 && y<0)
    {
        return "Third Quadrant"
    }
}
let reader=require("readline-sync");
let x=reader.questionFloat("enter value of x:");
let y=reader.questionFloat("enter value of y:");
console.log(findQuadrant(x,y))