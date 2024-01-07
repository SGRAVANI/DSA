// Problem Description
// Given two arrays A and B, write a function to compute their intersection.

// Note: Each element in the result should appear as many times as it shows in both arrays. The result needs to be in sorted order.

// Input format

// First line contains one integer N denoting the number of elements in array A

// Next line contains N integers denoting the elements of array A

// Next line contains one integer M denoting the number of elements in array B

// Next line contains M integers denoting the elements of array B

// Output format
// Single line containing the intersection elements of the two arrays in sorted order.

// Sample Input 1

// 4

// 1 2 2 1

// 2

// 2 2

// Sample Output 1
// 2 2

// Explanation
// Since 2 2 are the only elements present in both the arrays.

let reader=require('readline-sync')
let n1=reader.questionInt("enter total numbers you want to store in array1")

let arr1=[]

let ele;
let arr2=[]
for(let i=0;i<n1;i++)
{
    ele=reader.questionFloat("enter ele");
   arr1.push(ele)
}

let n2=reader.questionInt("enter total numbers you want to store in array")
for(let i=0;i<n2;i++)
{
    ele=reader.questionFloat("enter ele");
   arr2.push(ele)
}
console.log(arr1,arr2)
let o={}
for(let i=0;i<n1;i++)
{
 o[arr1[i]]=o[arr1[i]]?o[arr1[i]]+1:1   
}
console.log(o)
let r=[]
for(let i=0;i<n2;i++)
{
    if(o.hasOwnProperty(arr2[i]) &&o[arr2[i]]>0)
    {
        o[arr2[i]]=o[arr2[i]]-1;
        r.push(arr2[i])
        
    }

}
console.log(r)