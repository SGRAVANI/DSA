// Problem Description
// Given an array of n integers and an integer k, rotate the array k times in clockwise order.

// Input format
// There are three lines of input.

// First line contains integer n.

// Next line contains n space separated integers.

// Next line contains the value of k.

// Output format
// Print the rotated array.

// Sample Input 1
// 5

// 1 2 3 4 5
   
// 2

// Sample Output 1
// 4 5 1 2 3

// Explanation 1
// After first rotation array will be 5 1 2 3 4

// After second rotation array will be 4 5 1 2 3

// Constraints
// 1 <= n <= 100000

// 1 <= element of array <= 100000

// 0 <= k <= 100000

function rev(arr,s,e)
{

   
    while(s<=e)
    {
        //[arr[s],arr[e]]=[arr[e],arr[s]];
        t=arr[s]
        arr[s]=arr[e]
        arr[e]=t;
        s++;
        e--
    }
   // console.log(arr)
}
let arr=[1,2,3,4,5]
let n=arr.length;
let k=2;
function rightRotation(arr,n,k)
{
if(k>n)
{
    k=n%k;
}
if(n==1)
{
    return arr;
}
else{
    rev(arr,0,n-k-1);
    rev(arr,n-k,n-1) 
    rev(arr,0,n-1)
    console.log(arr)
    return arr;
}
}
console.log(rightRotation(arr,n,k))
