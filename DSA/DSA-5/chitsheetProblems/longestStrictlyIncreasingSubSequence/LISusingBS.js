// iven an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// Examples:-

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:

// 1 <= nums.length <= 2500
// -10^4 <= nums[i] <= 10^4


//TC : O(n2)
//sc: O(size of max incresaing seq)

let nums=[1,4,2,20,9,7,8,20,15]
let r=[nums[0]]
for(let i=1;i<nums.length;i++)
{
if(nums[i]>r[i-1])
{
    r.push(nums[i])
}
else{
    id=upperBound(id,nums[i])
    r[id]=nums[i]
}
}
function upperBound(id,nums)
{
    
}