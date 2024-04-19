// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

 

// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 

// Constraints:

// 1 <= n <= 1690

// Seen this question in a re

function ugly(num)
{

    let count=0
    let n=1
    let x=1;
    while(true)
    {
    //   if(n==1)
    //   {
    //     count++
    //   }
        n=x;
        while(n%2==0)
        {
            n=n/2;

        }
//        console.log(n)
        while(n%3==0)
        {
            n=n/3
        }
        while(n%5==0)
        {
            n=n/5;
        }
        //console.log("after 3 loops n is:",n)
        if(n==1)
        {
            count++;
        }
     

        if(count==num)
        {
            return x;
        }
        x++;
    }
}

console.log(ugly(1690))