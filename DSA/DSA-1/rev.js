// Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

// Input format
// First line contains an integer representing the value of T, the number of test cases.

// In next T lines each line contains the string S.

// Output format
// For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

// Constraints
// 1 <= T <= 10

// 1 <= length(S) <= 100000

// Sample Input 1
// 3

// nnaamm

// hello

// Aab

// Sample Output 1
// True

// False

// False

// Explanation 1
// nnaamm is a permutation of namman, which is a palindrome

// hello is not a permutation of any palindrome

// Aab is not a permutation of any palindrome
let str="Aab"
let o={}
for(let c of str)
{
    o[c]=o[c]?o[c]+1:1
}
let oddC=0
for(let key in o)
{
    if(o[key]%2==1)
    {
        oddC++;
    }
}
if(oddC>1)
{
    console.log("not palindromic")
}
else{
    console.log("palindromic")
}