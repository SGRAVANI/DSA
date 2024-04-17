// N Digit numbers with digits in increasing order
// MediumAccuracy: 49.66%Submissions: 10K+Points: 4
// Given an integer N, print all the N digit numbers in increasing order, such that their digits are in strictly increasing order(from left to right).

// Example 1:

// Input:
// N = 1
// Output:
// 0 1 2 3 4 5 6 7 8 9
// Explanation:
// Single digit numbers are considered to be 
// strictly increasing order.
// Example 2:

// Input:
// N = 2
// Output:
// 12 13 14 15 16 17 18 19 23....79 89
// Explanation:
// For N = 2, the correct sequence is
// 12 13 14 15 16 17 18 19 23 and so on 
// up to 89.
// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function increasingNumbers() which takes an integer N as an input parameter and return the list of numbers such that their digits are in strictly increasing order.

// Expected Time Complexity: O(9N)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 <= N <= 9

function generateNumber(n,subr,start,r)
{
    if(n==0)
    {
        r.push(subr)
        return
    }
//     if(n==1)
//     {
//    for(let i=0;i<=9;i++)
//    {
//     r.push(i)
  
//    }
//    return
//     }
//     else{
   for(let i=1;i<=n;i++)
   {
    for(let j=start;j<=9-n+1;j++)
    { // r.push(j)
        
        generateNumber(n-1,subr+j,start+1,r)    
    }
   }
       
}
//}
let r=[]
generateNumber(2,"",1,r)
console.log(r[r.length-1])