// Problem Description
// Given two strings s and t, write a function to determine if t is an anagram of s.

// Note: You may assume the string contains only lowercase alphabets.

// Note:-
// There's a test case where both the strings are empty but the js compiler is treating one as empty and other as undefined. So, update the readline function accordingly.

// Input format
// You will be given two strings in two separate lines.

// Output format
// Print "true" if both the strings are anagram otherwise “false”.

// Constraints
// Length of string <= 100000

// Sample Input 1
// anagram

// nagaram

// Sample Output 1
// true

// Sample Input 2
// rat

// car

// Sample Output 2
// false
function checkAnagram(str1,str2)
{
    let o1={}
    let o2={}
    for(let char of str1)
    {
        o1[char]=o1[char]?o1[char]+1:1
    }
    for(let char of str2)
    {
        o2[char]=o2[char]?o2[char]+1:1
    }
    for(let key in o1)
    {
       if( o1[key]!=o2[key])
       {
        return false
       }
    }
    for(let key in o2)
    {
        if(o2.key!=o1.key)
        {
            return false;
        }
    }
return true
}
console.log(checkAnagram("anagram","nagaram"))
console.log(checkAnagram("rat","cat"))