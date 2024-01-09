// roblem Description
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.

// The returned string should only have a single space separating the words.

// Do not include any extra spaces.

// Input format
// String s.

// Output format
// The function should return a string of the words in reverse order concatenated by a single space.

// Sample Input 1
// hello world

// Sample Output 1
// world hello

// Explanation
// The given words after being reversed gives:world hello

// Your reversed string should not contain leading or trailing spaces.

// Constraints
// 1 <= s.length <= 10^5

// s contains English letters (upper-case and lower-case), digits, and spaces ' '.

// There is at least one word in s.

// Resource
// Video link : Reverse Words In A String

// Checklist

function reverse(str)
{
    let words=[]
    
    for(let i=0;i<str.length;i++)
    {
     let substr='';
      if(i==0 && str[i]!=' ')
      {
      while(str[i]!=' ')
      {
        substr+=str[i];
        i++;
      }
      words.push(substr);
      substr=''
      }

      if(i>0 && str[i]!=' ' &&str[i-1]==' ' )
      {
        while(str[i]!=' ')
        {
            substr+=str[i];
            i++;
        }
        words.push(substr);
        substr=''
      }
    }
    //console.log(words)
    let rev=''
    for(let i=words.length-1;i>=0;i--)
    {
        if(i!=0)
        {
        rev+=words[i]+" "
        }
        else{
            rev+=words[i]
        }
    }
    console.log(rev)
}
let str=" The function should return a string of the words in reverse order     concatenated by a single    space. "
reverse(str)
let s=" hello  world "
reverse(s)