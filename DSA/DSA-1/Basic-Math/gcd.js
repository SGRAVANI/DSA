// Problem Description
// Given 2 numbers a and b, you have to find the gcd of these 2 numbers using recursion.

// Input format
// First line contains an integer t - Number of test cases.

// First line of each test contains 2 integers - a and b.

// Output format
// Print the gcd of each test in a separate line.

// Sample Input 1
// 2

// 8 20

// 80 80

// Sample Output 1
// 4

// 80

// Explanation
// The gcd of 8 & 20 is 4 as 4 is the greatest number that divides both 8 & 20.

// Constraints
// t <= 1000

// 1 <= a, b <= 10^18
function gcd(m,n)
{
    if(n==0)
    {
        return m;
    }
   if(m==0)
   {
    return n;
   }
    else{
        return gcd(n,m%n);
    }
}

//complexity of gcd O(log(min(m,n)))
//larger number=m
//smaller number n
//performing m%n untill smaller number becomes 0
function gcd1(m,n)
{
    if(n==0)
    {
        return m;
    }
    if(m==0)
    {
        return n;
    }
    if(m>n)
    {
        return gcd(m-n,n)
    }
    else{
        return gcd(m,n-m);
    }
}
//complexity of gcd1 O(max(m,n))
//example:
//gcd(10,1)
//gcd(9,1)
//gcd(8,1)
//gcd(7,1)
//gcd(6,1)
//gcd(5,1)
//gcd(4,1)
//gcd(3,1)
//gcd(2,1)
//gcd(1,1)
//gcd(1,0)
//1
//total calls = max number between m and n

let reader=require("readline-sync")
let m=reader.questionInt("enter first number:")
let n=reader.questionInt("enter second number:")
console.log(gcd(m,n))

