// Problem Description
// An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1, 2, 3 and so on.

// Given a collection of intervals, merge all overlapping intervals. The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.

// Note: The merged intervals should be printed in increasing order of start value.

// Input format
// There are N+1 lines of input.

// First line contains N, the number of intervals

// Next N lines contain 2 space separated integers A and B, which represent the start and end of an interval

// Output format
// For the X merged intervals, print each interval (the start and end being space separated) on a separate line

// Constraints
// 1 <= N <= 50000

// 0 <= A, B <= 1e9

// B >= A

// Sample Input 1
// 4

// 1 3

// 2 6

// 8 10

// 15 18

// Sample Output 1
// 1 6

// 8 10

// 15 18

// Explanation 1
// Since intervals [1 3] and [2 6] overlap, merge them into [1 6]

// Sample Input 2
// 2

// 1 4

// 4 5

// Sample Output 2
// 1 5

// Explanation 2
// Intervals [1 4] and [4 5] overlap and get merged into [1 5]

// Resource
let intervals=[ [1, 3],[8, 10],[15 ,18],[2, 6],[3,9]]
intervals.sort((a,b)=>a[0]-b[0])
console.log(intervals)
//completely overlap start< endPrevious and end <=endprevious
// then start=startPrevous and end=endPrevious
//partioally overlap strat<endprevous and end>endprevious
 //then start=startprevious and end=end(current)
//no overlapping - start>=end
//then no merging
let start=intervals[0][0]
let end=intervals[0][1]
let ans=[]
for(let i=1;i<intervals.length;i++)
{
    if(intervals[i][0]<=end)
    {
        if(intervals[i][1]>end)
        {
        end=intervals[i][1]
        }
    }
    else{
         ans.push([start,end])
         start=intervals[i][0]
         end=intervals[i][1]
    }

}
ans.push([start,end])
console.log(ans)