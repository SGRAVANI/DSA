// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Examples:-

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.
let a=[1,2,3]
let s=[]
function powerSet(a,i,sub)
{
if(i==a.length)
{
s.push([...sub])
return
}
powerSet(a,i+1,sub)
sub.push(a[i])
powerSet(a,i+1,sub)
sub.pop()


}
powerSet(a,0,[])
console.log(s)