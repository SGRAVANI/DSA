// Problem Description
// You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

// You are supposed to find out which character occurs the maximum number of times and its occurrence count in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.

// For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

// Input format
// One line of input containing the string S.

// Output format
// You will have to output two space separated values:

// The character which occurs the maximum number of times.

// The number of its occurrence.

// Sample Input 1
// Statements are unique.

// Sample Output 1
// e 4

// Constraints
// 1 <= |S| <= 100
function maxOccur(s)
{let o={}
    for(let i=0;i<s.length;i++)
    {
   o[s[i]]=o[s[i]]?o[s[i]]+1:1;
    }
    let maxChar=''
    let max=0
    for(let key in o)
    {
    if(o[key]>=max)
    {
      if(o[key]==max)
      {
      if(key.charCodeAt()<maxChar.charCodeAt())
      {
        maxChar=key;
        max=o[key]
      }
      
      }

        max=o[key]
        maxChar=key;
    }

    }
    return [maxChar,max]
}
let str="Statements are unique."
console.log(maxOccur(str))