// Problem Description
// You are given a string of words present in a book. Find out the count of words present in that book.

// Input format
// The first input line has a string s.

// Output format
// Return the count of words in the string.

// Sample Input 1
// Java is great Grails is also great

// Sample Output 1
// 7

// Explanation
// Words present in the string are : 7(Java,is,great,Grails,is,also,great)
function countWords(str)
{
    let c=0
    for(let i=0;i<str.length;i++)
    {
        if(i==0 &&str[0]!=' ')
        {
            c++;
        }
        else if(str[i-1]==' ' &&str[i]!=' '  )
        {
         c++;
        }
    }
    return c;
}
let s="Java is great Grails is also great"
console.log(countWords(s))