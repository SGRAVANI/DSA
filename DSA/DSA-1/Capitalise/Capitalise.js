// Problem Description
// Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.

// Note : No inbuilt function such as split() to be used.

// Input format
// One line of input which contains a string, the paragraph.

// Output format
// Return the paragraph after capitalising each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Constraints
// Length of paragraph < 100

// The paragraph contains spaces, lowercase, uppercase characters and ‘.’.


function capitalize(str)
{
    let news="";
    for(let i=0;i<str.length;i++)
    {
        if(i==0)
        {
            if(str[i]>='a' && str[i]<='z')
            {
             let ascii=str[i].charCodeAt();
             let upperCase=ascii-32;
             news+=String.fromCharCode(upperCase);
            }
            else{
                news+=str[i]
            }

        }
        else if(str[i-1]==' ' && str[i]!=' ' )
        {
            if(str[i]>='a' && str[i]<='z')
            {
                let ascii=str[i].charCodeAt();
                let upper=ascii-32;
                news+=String.fromCharCode(upper)
            }
            else{
                news+=str[i]
            }
        }
        else{
         news+=str[i]
        }
    }
    return news;
}
let reader=require("readline-sync")
let str=reader.question("enter string")
console.log(capitalize(str))