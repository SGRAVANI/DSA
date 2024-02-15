// Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// Input format
// There are 2 lines of input.

// First line contains an integer N ,the number of input integers in the array.

// Second line contains N space separated integers.

// Output format
// N space separated elements which satisfy the given condition.

// Sample Input 1
// 6

// 1 5 1 1 6 4

// Sample Output 1
// 1 4 1 5 1 6

// Explanation 1
// nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].
let nums=[1, 5, 1, 1, 6, 4]
for(let i=1;i<nums.length;i+=2)
{
  if(nums[i]<nums[i-1])
  {
    [nums[i],nums[i-1]]=[nums[i-1],nums[i]]
  }
  if(nums[i]<nums[i+1])
  {
    [nums[i],nums[i+1]]=[nums[i+1],nums[i]]
  }
}

console.log(nums)