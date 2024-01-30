// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Examples:-

// Input: nums = [1,2,3]
// Output: [1,3,2]

// Input: nums = [3,2,1]
// Output: [1,2,3]

// Input: nums = [1,1,5]
// Output: [1,5,1]

// Constraints:-

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100
//brute force solution 
let arr=[1,2,3]
let newxPerm;
// let t=arr[0]
// for(let i=1;i<arr.length;i++)
// {
//    arr[i-1]=arr[i]
// }
//arr[arr.length-1]=t;
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {

//     }
// }
// console.log(arr)
let sol=[]
function perm(arr,l,h)
{
    if(l==h-1)
    {

    sol.push([...arr])
    }
    for(let i=l;i<h;i++)
    {
        let temp=arr[i]
        arr[i]=arr[l]
        arr[l]=temp
        // [arr[i],arr[l]]=[arr[l],arr[i]];
        console.log(arr[i],arr[l])
        perm(arr,l+1,h)  
        // [arr[i],arr[l]]=[arr[l],arr[i]];     
        temp=arr[i]
        arr[i]=arr[l]
        arr[l]=temp
    }
}
perm(arr,0,arr.length)
for(let i=0;i<sol.length;i++)
{
    
}
console.log(sol)