// Ujjwal loves to read story books. There are n piles of books, the ith pile has a[i] books. His mom has gone to market and will come back in h hours.

const { toFormData } = require("axios");

// Ujjwal can decide his books-per-hour reading speed of k. Each hour, he chooses some pile of books and reads k books from that pile. If the pile has less than k books, he reads all of them instead and will not read any more books during this hour.

// Ujjwal likes to read slowly but still wants to finish reading all the books before his mom returns.

// Return the minimum integer k such that he can read all the books within h hours.

// Input format
// First line contains n and h.

// Second line contains n space integers given by a[i].

// Output format
// A single integer k.

// Sample Input 1
// 4 8

// 3 6 7 11

// Sample Output 1
// 4

// Explanation
// The minimum books-per-hour reading speed is 4 such that ujjwal can read all the books within h hours.
function isValid(a,h,books)
{
    let timeRequired=0
    for(let i=0;i<a.length;i++)
    {
        if(a[i]<=books)
        {
            timeRequired+=1
        }
        else{
            if(a[i]%books==0)
            {
                timeRequired+=a[i]/books
            }
            else{
                timeRequired+=Math.floor(a[i]/books)+1
            }
        }
       
    }
    if(timeRequired<=h)
    {
        return true
    }
    else{
        return false
    }
}
let a=[3, 6, 7, 11]
let h=8;

let min=1;
let max=Math.max(...a)
let res=Infinity
for(let books=min;books<=max;books++)
{
    if(isValid(a,h,books))
    {
    res=Math.min(res,books);

    }
}
console.log(res)