// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Examples:-

// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23
let piles = [30,11,23,4,20]
let h = 6
function minNumberToEatBananas(piles,h)
{
    let maximum=Math.max(...piles)
    console.log(maximum)
    let start=1
    let end=maximum;
    while(s<=end)
    {
        let m=Math.floor((start+end)/2)
        if(a[m]==)
    }
}
minNumberToEatBananas(piles,h)