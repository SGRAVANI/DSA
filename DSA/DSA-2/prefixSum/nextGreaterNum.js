// Problem Description
// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Input format
// A 32 bit integer N

// Output format
// A single integer

// Sample Input 1
// 12

// Sample Output 1
// 21

// Explanation
// There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

// Constraints
// 0<= N <= 10^9

// Crio Methodology - Problem Approach
let n=4321
let n1;
n1=n;
let arr=[]

while(n!=0)
{
    arr.unshift(n%10);
    n=Math.floor(n/10)
}
console.log(arr)
let i;
for( i=arr.length-2;i>=0;i--)
{
    if(arr[i]<arr[i+1])
    {
     break;
    }
}
//console.log(i)
if(i!=-1)
{
    let j=i+1;
    let minIndex;
    let minVal=Infinity;
    for(let k=j;k<arr.length;k++)
    {
   if(arr[k]<minVal)
   {
    minVal=arr[k]
    minIndex=k
   }
    }
    console.log(minVal,minIndex)
    //[arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
    let t=arr[minIndex]
    arr[minIndex]=arr[i]
    arr[i]=t
    let a1=arr.slice(0,i+1)
    let a2=arr.slice(i+1);
    a2.sort((a,b)=>a-b);
    console.log(a1,a2)
    console.log([...a1,...a2])

}
else{
    console.log(n1)
}