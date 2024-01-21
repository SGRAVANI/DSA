// Problem Description
// Given an array of positive and negative numbers, you need to find if there is any subarray with 0 sum.

// Note: A subarray of an array is a set of contiguous elements having a size of at least 1.

// Input format
// First line contains a single integer T denoting the number of test cases.

// For each test case, an integer N will be given on one line and the next line will contain the N numbers of the array.

// Output format
// For each test case, print "Yes" if a subarray exists and "No" otherwise, on a single line.

// Constraints
// 1 <= T <= 1000

// 1<= N <= 100000

// Sum of N for all test cases will be <=200000

// -10^5 <= Array element values <= 10^5

// Sample Input 1
// 2

// 4

// 4 2 -2 5

// 3

// 3 2 -1

// Sample Output 1
// Yes

// No

//brute force
let arr=[4, 2, -2, 5]
let sum=0
for(let i=0;i<arr.length;i++)
{ sum=0;
    let start;
    let end;
    for(let j=i;j<arr.length;j++)
    {
        if(sum==0)
        {
            start=j
        }
        sum=sum+arr[j]
      
        if(sum==0)
        { end=j
            console.log("sub arry is",arr.slice(start,end+1))
            console.log('sum is zrio')
            break;
        }
    }
}

//optimized Approach
//steps 1. find prefix of all elements
//step2 check if there is a repeat number in prefix
//if yes then elements of input array after first occurence of prefix value to next prefix repeat value will be responsible for zero sum
//let prefix=[]
// prefix.push(arr[0])
// for(let i=1;i<arr.length;i++)
// {
//     prefix[i]=prefix[i-1]+arr[i]
// }
let o={}
let psum=0
for(let i=0;i<arr.length;i++)
{
psum=psum+arr[i]
if(o.hasOwnProperty(psum))
{
    let start=o[psum]+1
    let end=i+1
    console.log("sub array with 0 sum is : ",arr.slice(start,end))
    break;
}
else{
    o[psum]=i;
}
}