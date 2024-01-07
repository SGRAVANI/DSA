// Problem Description
// Given a string, count the total number of vowels present in that string.

// Note: The string contains uppercase and lowercase english alphabets only.

// Input format
// One line of input, which contains the given string.

// Output format
// Print the total number of vowels.

// Sample Input 1
// language

// Sample Output 1
// 4

// Explanation 1
// There are a total of 4 vowels in the string "language" i.e. 'a', 'u', 'a', 'e'.

// Constraints
// 0 < Length of string < 100

let reader=require("readline-sync")
let str=reader.question("enter string: ")
function countVowel(str)
{let c=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='U'||str[i]=='O')
        {
        c++;
        }
    }
    console.log("number of vowels : ",c)
}
countVowel(str);