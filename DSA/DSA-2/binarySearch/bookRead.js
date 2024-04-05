// Ujjwal loves to read story books. There are n piles of books, the ith pile has a[i] books. His mom has gone to market and will come back in h hours.

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

let piles=[3, 6, 7, 11]
let h=8;
function calculateHours(piles,rate)
{
    let required=0;
    for(let i=0;i<piles.length;i++)
    {
        if(piles[i]<=rate)
        {
            required+=1
        }
        else{
            required+=Math.ceil(piles[i]/rate)
        }
    }
    return required;
}
function bs(piles,h)
{
    let low=1
    let high=Math.max(...piles)
    let res=-1;
    while(low<=high)
    {
        let mid=low+Math.floor((high-low)/2)
        let requiredTime=calculateHours(piles,mid)
        if(requiredTime==h)
        {
            return mid;
        }
        else if(requiredTime<h)
        {
         res=mid;
         high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return res;
}

console.log(bs(piles,h))