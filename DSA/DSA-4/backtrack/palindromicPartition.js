// Problem Description
// Given a string s, partition s into substrings such that each substring is a palindrome.

// Return all possible palindrome partitioning of s.

// Input format
// The string s.

// Output format
// On each new line, print a different way of partitioning the string into substrings that are palindromes.

// Constraints
// 0 <= |s| <= 18

// Sample Input 1
// aabc

// Sample Output 1
// aa b c

// a a b c

// Explanation 1
// The 2 sets of substrings shown are the ways in which the given string can be partitioned such that all substrings are palindromes.
function isPali(s)
  { 
    let i=0
    let j=s.length-1
    while(i<j)
    {
        if(s[i]!=s[j])
        {
            return false
        }
        i++;
        j--;
    }
    return  true
}
function solve(s,subr)
{
    if(s.length==0)
    {   console.log(subr)
        return
    }
    

    for(let i=0;i<s.length;i++)
    {
        let part1=s.slice(0,i+1);
        let part2=s.slice(i+1)
        if(isPali(part1))
        {  subr.push(part1)   
            solve(part2,subr)
            subr.pop()
        }
        else{
            return
        }


    }
}
solve("aabc",[])