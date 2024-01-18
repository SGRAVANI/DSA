// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character

// Delete a character

// Replace a character

// Input format
// First line will have word1.

// Second line will have word2.

// Output format
// Minimum number of operations required to convert word1 to word2.

// Constraints
// 1 <= |word1| <= 1000

// 1 <= |word2| <= 1000

// Sample Input 1
// horse

// ros

// Sample Output 1
// 3

// Explanation 1
// horse -> rorse (replace 'h' with 'r')

// rorse -> rose (remove 'r')

// rose -> ros (remove 'e')
let s1="horse"
let s2="ros"
console.log(minOp(s1,s2,s1.length,s2.length))
function minOp(s1,s2,n,m)
{
    if(n==0)
    {
        return m;

        //if s1 is empty then to convert it to s2 will require m insetions
    }
    if(m==0)
    {
        return n;
        //if s2 is empty then to convert it to s1 will require n deletions
    }
    if(s1[n-1]==s2[m-1])
    {
        return minOp(s1,s2,n-1,m-1)+0
    }
    else{
        let insertion=1+minOp(s1,s2,n,m-1)
        let deletions=1+minOp(s1,s2,n-1,m)
        let modification=1+minOp(s1,s2,n-1,m-1)
        return Math.min(insertion,deletions,modification)
    }

}
