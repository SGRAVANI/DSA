// Problem Description
// Given an unsigned integer N, swap all odd bits with even bits. Every even position bit is swapped with the adjacent bit on the right side and every odd position bit is swapped with adjacent on the left side. Assume a 32 bit integer.

// Hint: To avoid negative values caused by integer overflow, utilize BigInt in your JavaScript code for handling large integer computations.BigInt is a JavaScript built-in object used to represent integers larger than the range supported by the Number primitive.

// Input format
// N which represents an unsigned integer.

// Output format
// Single output integer after the algorithm has successfully swapped bits of the input.

// Constraints
// 0 <= N <= 2147483647

// Sample Input 1
// 22

// Sample Output 1
// 41

// Explanation 1
// The given number is 22 (00010110), it should be converted to 41 (00101001).

// Sample Input 2
// 13

// Sample Output 2
// 14

// Explanation 2
// The given number is 13 (00001101), it should be converted to 14 (00001110).
let n=22
function findMask(pos)
{
    return 1<<pos;
}
function findBit(num,pos)
{
let mask=findMask(pos);
if((num&mask)==0)
{
    return 0
}
else{
    return 1;
}
}


for(let i=0;i<=31;i+=2)
{
let evenBit=findBit(n,i)
let oddBit=findBit(n,i+1);
console.log(oddBit,evenBit)
if(evenBit!=oddBit)
{
    // n=(n&findMask(i))^1;
    // console.log("n is ",n)
    // n=(n&findMask(i+1))^1;
    // console.log("n is ",n)
    n=n^(1<<i)
    n=n^(1<<i+1)
    
  
}
}
console.log(n)