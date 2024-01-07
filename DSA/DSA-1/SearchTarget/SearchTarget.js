// Problem Description
// Given a sorted array of N distinct integers and a target value X, return the index if the target is found. If not found then return -1.

// Note - Try implementing with O(logN) runtime complexity.

// Input format
// First line contains N, the number of distinct integers. Second line contains N space separated integers.

// Output format
// Print the index of target element if found else return -1.

// Sample Input 1
// 5 7

// 1 3 5 7 13

// Sample Output 1
// 3

// Explanation
// Target integer 7 is at index 3.

// Sample Input 2
// 5 8

// 1 3 5 7 13

// Sample Output 2
// -1

// Explanation
// Target integer 8 is not present.
function binarySearch(a,key)
{
   let m;
   let l=0;
   let h=a.length-1;
   while(l<=h)
   {
    m=Math.floor((l+h)/2);
    if(a[m]==key)
    {
        return m;
    }
    else if(a[m]<key)
    {
        l=m+1;
    }
    else{
        h=m-1;
    }
   }
   return -1;
}
let reader=require('readline-sync')
let n=reader.questionInt("enter total numbers you want to store in array")
let ele;
let arr=[]
for(let i=0;i<n;i++)
{
    ele=reader.question("enter ele");
   arr.push(ele)
}
console.log(arr)
let key=reader.question("enter key element to search")
let r=binarySearch(arr,key)
if(r==-1)
{
    console.log("ele not found")
}
else{
    console.log("ele found at index ",r)
}