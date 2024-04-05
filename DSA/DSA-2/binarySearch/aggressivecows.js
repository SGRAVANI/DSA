// Aggressive Cows
// HardAccuracy: 59.57%Submissions: 51K+Points: 8
// You are given an array consisting of n integers which denote the position of a stall. You are also given an integer k which denotes the number of aggressive cows. You are given the task of assigning stalls to k cows such that the minimum distance between any two of them is the maximum possible.
// The first line of input contains two space-separated integers n and k.
// The second line contains n space-separated integers denoting the position of the stalls.

// Example 1:

// Input:
// n=5 
// k=3
// stalls = [1 2 4 8 9]
// Output:
// 3
// Explanation:
// The first cow can be placed at stalls[0], 
// the second cow can be placed at stalls[2] and 
// the third cow can be placed at stalls[3]. 
// The minimum distance between cows, in this case, is 3, 
// which also is the largest among all possible ways.
// Example 2:

// Input:
// n=5 
// k=3
// stalls = [10 1 2 7 5]
// Output:
// 4
// Explanation:
// The first cow can be placed at stalls[0],
// the second cow can be placed at stalls[1] and
// the third cow can be placed at stalls[4].
// The minimum distance between cows, in this case, is 4,
// which also is the largest among all possible ways.
// Your Task:
// Complete the function int solve(), which takes integer n, k, and a vector stalls with n integers as input and returns the largest possible minimum distance between cows.

// Expected Time Complexity: O(n*log(10^9)).
// Expected Auxiliary Space: O(1).

// Constraints:
// 2 <= n <= 10^5
// 2 <= k <= n
// 0 <= stalls[i] <= 10^9

// Topic Tags

//steps:
//1.arrange stalls in ascending order
//because aapne distance find karawanu che je negative allow nathi
//2. minimum distance will be 0 jo badhi cow ek j stall ma hoe to =>low
//3. maximum distance = stalls[stalls.length-1]-stalls[0]  =>high
//4. binary search chalawava distance ni range use karo low thi high
//5. is VAlid function will check whether with given distance number of given cars can be accomodated to stalls

function isValid(stalls,mid,k)
{
    let cows=1;
    let prevStall=stalls[0]
    for(let i=1;i<stalls.length;i++)
    {
     if(stalls[i]-prevStall>=mid)
     {
        cows++;
        if(cows==k)
        {
            return true
        }
        prevStall=stalls[i]
     }
    }
    if(cows<k)
    {
        return false
    }
}
function bs(stalls,k)
{
    let low=0
    let res=-1;
    let high=stalls[stalls.length-1]-stalls[0];
    while(low<=high)
    {
        let mid=low+Math.floor((high-low)/2);
        if(isValid(stalls,mid,k))
        {
         res=mid;
         low=mid+1;
        }
        else{
            high=mid-1
        }
    }
    return res;
}
let k=3
let stalls = [10, 1, 2 ,7 ,5]
stalls.sort((a,b)=>a-b)
console.log(bs(stalls,k))