// Problem Description
// A string S is given consisting of lowercase alphabetical characters only. You need to return a sorted string using Count Sort.

// Input format
// First line will contain a single integer n representing size of the given string.

// Second line will contain a single string S of size n.

// Output format
// Output the string in a single line.

// Sample Input 1
// 10

// abcdeedcba

// Sample Output 1
// aabbccddee

// Constraints
// 1<=n<=10^6

// String S will contain lowercase alphabetical characters only
a=97
console.log('a'.charCodeAt()-97)
let s="abcdeedcbaa"
let arr=s.split('')
//let set=new Set(arr);
let minc=arr[0];
let maxc=arr[0];
for(let i=1;i<arr.length;i++)
{
if(minc>arr[i])
{
    minc=arr[i]
}
if(maxc<arr[i])
{
    maxc=arr[i]
}
}
let diff=maxc.charCodeAt()-minc.charCodeAt()
console.log(diff)
let count=new Array(diff+1).fill(0)
console.log(count)
for(let i=0;i<s.length;i++)
{
    

    let index=s[i].charCodeAt()-minc.charCodeAt()
count[index]++;
    
}
console.log(count)
let output=""
for(let i=0;i<count.length;i++)
{
    for(let j=0;j<count[i];j++)
    {
    output+=String.fromCharCode(i+minc.charCodeAt())
    }
}
console.log(output)