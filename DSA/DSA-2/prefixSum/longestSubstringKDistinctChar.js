// Problem Description
// Given a string, find the length of the longest substring that contains at most K distinct characters.

// Note:

// Uppercase and Lowercase characters should be considered as different characters.

// There can be numbers and special characters as well.

// Input format
// There are 2 lines of input.

// First-line contains two space-separated integers representing the value of N and K.

// The next line contains the string S of length N.

// Output format
// The length of the longest substring T that contains at most K distinct characters.

// Constraints
// 1 <= N <= 10^5

// 0 <= K <= 256

// Sample Input 1
// 5 3

// abacd

// Sample Output 1
// 4

// Explanation 1
// The longest substring that has 3 distinct characters, "abac", is of length 4.

// Sample Input 2
// 6 3

// Xyyzya

// Sample Output 2
// 5

// Explanation
// There are 2 substrings, "Xyyzy" and “yyzya” which are the longest ones having 3 distinct characters and their length is 5.

// Resources
// Longest Substring with At Most K Distinct Characters
// Pattern Introduction
function longestSubstringWithKdistictChar(str,k)
{
    let m=new Map()
    let left=0
    let right=0
    let s=""
    let maxL=0
    console.log(m.size)
    while(right<str.length)
    {
       m.set(str[right],m.get(str[right])?m.get(str[right])+1:1)
       while(m.size>k)
       {
        if(m.get(str[left])==1)
        {
            m.delete(str[left])
            left++;
        }
        else{
            m.set(str[left],m.get(str[left])-1)
            left++;
        }
       }
       if(maxL<right-left+1)
       {
        maxL=right-left+1
        s=str.slice(left,right+1)
       }
       right++
       }
    
    console.log(m)
    console.log(s)
}
let str="abacdeefghi"
let k=4
longestSubstringWithKdistictChar(str,k)