// You have N books, each with A[i] number of pages. M students need to be allocated contiguous books, with each student getting at least one book.
// Out of all the permutations, the goal is to find the permutation where the sum of maximum number of pages in a book allotted to a student should be minimum, out of all possible permutations.

// Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).

 

// Example 1:

// Input:
// N = 4
// A[] = {12,34,67,90}
// M = 2
// Output:113
// Explanation:Allocation can be done in 
// following ways:
// {12} and {34, 67, 90} Maximum Pages = 191
// {12, 34} and {67, 90} Maximum Pages = 157
// {12, 34, 67} and {90} Maximum Pages =113.
// Therefore, the minimum of these cases is 113,
// which is selected as the output.

// Example 2:

// Input:
// N = 3
// A[] = {15,17,20}
// M = 2
// Output:32
// Explanation: Allocation is done as
// {15,17} and {20}
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function findPages() which takes 2 Integers N, and m and an array A[] of length N as input and returns the expected answer.


// Expected Time Complexity: O(NlogN)
// Expected Auxilliary Space: O(1)


// Constraints:
// 1 <= N <= 105
// 1 <= A [ i ] <= 106
// 1 <= M <= 105

 let n= 4
 let a = [12,34,67,90]
 let m = 2
 function isValid(a,mid,m)
 {
    let noOfStudent=1;
    let sum=0
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
        if(sum>mid)
        {

            noOfStudent++;
            sum=a[i]
            if(noOfStudent>m)
            {
                return false
            }
        }
    }
    return true
 }
 function bs(a,m)
 {
    if(a.length<m)
    {
        return -1
    }
let low=Math.max(...a)
let high=a.reduce((sum,ele)=>sum+ele,0)
console.log(low,high)
let res=-1
while(low<=high)
{
    let mid=low+Math.floor((high-low)/2);
    if(isValid(a,mid,m))
    {  res=mid
        high=mid-1
    }
    else{
     low=mid+1
    }
}
return res;
}

console.log(bs(a,m))
// N = 3
// A[] = {15,17,20}
// M = 2
console.log(bs([15,17,20],2))