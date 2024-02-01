// roblem Description
// Given a string, find the length of the longest substring which has no repeating characters.

// Input format
// Input is a string.

// Output format
// Output is an integer representing the longest substring with no repeating characters.

// Sample Input 1
// aabcccbcb

// Sample Output 1
// 3

// Explanation 1
// "abc" is the longest substring with no repeating characters.

// Sample Input 2
// cdddddd

// Sample Output 2
// 2

// Explanation 2
// "cd" is the longest substring with no repeating characters.


// Checklist
//bbrute force
function isUnique(str)
{
    let s=new Set(str);
    if(str.length==s.size)
    {
        return true
    }
    else{
        return false
    }
}
let str="aabcccbcb"
let sub=""
let maxL=0
for(let i=0;i<str.length;i++)
{ sub=""
    for(let j=i;j<str.length;j++)
    {
    if(isUnique(str.slice(i,j+1)))
    {
      sub+=str[j]
      maxL=Math.max(maxL,j-i+1)
    }
    else{
        break;
    }
}
}
console.log(maxL)