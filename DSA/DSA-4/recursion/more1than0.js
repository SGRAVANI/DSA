// Print N-bit binary numbers having more 1s than 0s
// MediumAccuracy: 56.08%Submissions: 43K+Points: 4
// Given a positive integer n. Your task is to generate a string list of all n-bit binary numbers where, for any prefix of the number, there are more or an equal number of 1's than 0's. The numbers should be sorted in decreasing order of magnitude.

// Example 1:

// Input:  
// n = 2
// Output: 
// {"11", "10"}
// Explanation: Valid numbers are those where each prefix has more 1s than 0s:
// 11: all its prefixes (1 and 11) have more 1s than 0s.
// 10: all its prefixes (1 and 10) have more 1s than 0s.
// So, the output is "11, 10".
// Example 2:

// Input:  
// n = 3
// Output: 
// {"111", "110", "101"}
// Explanation: Valid numbers are those where each prefix has more 1s than 0s.
// 111: all its prefixes (1, 11, and 111) have more 1s than 0s.
// 110: all its prefixes (1, 11, and 110) have more 1s than 0s.
// 101: all its prefixes (1, 10, and 101) have more 1s than 0s.
// So, the output is "111, 110, 101".
// User Task:
// Your task is to complete the function NBitBinary() which takes a single number as input n and returns the list of strings in decreasing order. You need not take any input or print anything.

// Expected Time Complexity: O(|2n|)
// Expected Auxiliary Space: O(2n)

// Constraints:
// 1 <= n <= 15


function solve(n,one,zero,op)
{
    // if(op.length==n)
    // {
    //     console.log(op)
    //     return
    // }
    // if(one>0)
    // {
    //     solve(n,one-1,zero,op+"1")
    // }
    // //let rem=Math.floor(n/2)
    // if(one<zero && op.length<3)
    // {
    //     solve(n,one,zero-1,op+"0")
    // }
    if(n==0)
    {
        console.log(op)
        return
    }
    solve(n-1,one+1,zero,op+"1")
    if(one>zero)
    {
        solve(n-1,one,zero+1,op+"0")
    }
}
solve(3,0,0,"")