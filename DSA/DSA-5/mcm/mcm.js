// Given the dimension of a sequence of matrices in an array arr[], where the dimension of the ith matrix is (arr[i-1] * arr[i]), the task is to find the most efficient way to multiply these matrices together such that the total number of element multiplications is minimum.

// Input: arr[] = {40, 20, 30, 10, 30}
// Output: 26000
// Explanation:There are 4 matrices of dimensions 40×20, 20×30, 30×10, 10×30.
// Let the input 4 matrices be A, B, C and D.
// The minimum number of  multiplications are obtained by 
// putting parenthesis in following way (A(BC))D.
// The minimum is 20*30*10 + 40*20*10 + 40*10*30
let arr=[40, 20, 30, 10, 30]
console.log(solve(arr,1,arr.length-1))
function solve(arr,i,j)
{
    if(i>=j)
    {
        return 0;
    }
    let minCost=Infinity
    for(let k=i;k<j;k++)
    {
        let temp=solve(arr,i,k)+solve(arr,k+1,j)+arr[i-1]*arr[k]*arr[j]
        minCost= Math.min(minCost,temp)
    }
    return minCost;
}
