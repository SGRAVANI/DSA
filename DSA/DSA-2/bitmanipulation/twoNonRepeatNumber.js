// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]
 

// Constraints:

// 2 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each integer in nums will appear twice, only two integers will appear once.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums=[1,2,1,3,2,5]

var singleNumber = function(nums) {
    //   let m={}
    //   for(let ele of nums)
    //   {
    //     m[ele]=m[ele]?m[ele]+1:1
    //   }  
    //   let r=[]
    //   for(let key in m)
    //   {
    //     if(m[key]==1)
    //     {
    //         r.push(Number(key))
    //     }
    //   }
    //   return r;
    let exorAll=nums[0]
    for(let i=1;i<nums.length;i++)
    {
        exorAll=exorAll^nums[i]
    }
    let pos;
    for(let i=0;i<=31;i++)
    {
        let bit=(exorAll&(1<<i))
        if(bit!=0)
        {
            pos=i;
            break;
        }
    }
    console.log(exorAll,pos)
    let groupA=[]
    let groupB=[]
    for(let i=0;i<nums.length;i++)
    {
        let bit=(nums[i]&(1<<pos))
        if(bit!=0)
        {
            groupA.push(nums[i])
        }
        else{
            groupB.push(nums[i])
        }
    }
    console.log(groupA,groupB)
    let exorGroupA=groupA[0];
    let exorGroupB=groupB[0]
    
    for(let i=1;i<groupA.length;i++)
    {
        exorGroupA=exorGroupA^groupA[i]
    }
    console.log(exorGroupA)
    for(let i=1;i<groupB.length;i++)
    {
        exorGroupB=exorGroupB^groupB[i]
    }
    return [exorGroupB,exorGroupA]
    };
console.log(singleNumber(nums))