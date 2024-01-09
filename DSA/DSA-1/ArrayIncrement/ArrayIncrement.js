// Problem Description
// Given a number represented as an array of digits, increment the number by 1, and return the resulting sum as an array.

// Input format
// There are two lines of input.

// First line will contain a single integer N .

// Next line will contain N space separated integers for Array A.

// Output format
// Single integer which will be the incremented number.

// Sample Input 1
// 3

// 1 1 1

// Sample Output 1
// 112

// Explanation
// 111 + 1 = 112

// Constraints
// 0<=Ai<10

// Most significant value will be non-zero in the array.

// 1<=N<=5000

let a=[9,9,9]
function arrayIncr(a)
{
    let index=a.length-1;
    let carry=1;
    for(let i=index;i>=0;i--)
    {
        sum=a[i]+carry;
        console.log(sum)
        carry=Math.floor(sum/10)
        if(sum>=10)
        {
         a[i]=sum-10;

        }
        else{
            a[i]=sum;
            //carry=0
            break;
        }
    }
    if(carry==1)
    {
        a.unshift(1);
    }
    console.log(a)
}
arrayIncr(a)