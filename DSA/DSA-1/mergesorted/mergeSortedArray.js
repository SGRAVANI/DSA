// Problem Description
// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Input format
// A single Integer M, that contains the number of elements in the first array.

// A single Integer N, that contains the number of elements in the second array.

// Next Line contains M space Integers of the array nums1.

// Next Line contains N space Integers of the array nums2.

// Output format
// Print the array after merging.

// Sample Input 1
// 3

// 3

// 1 2 3

// 2 5 6

// Sample Output 1
// 1 2 2 3 5 6

// Explanation 1
// The sorted array is returned after merging.

// Constraints
// 1 <= N,M <= 10^5

// |nums1[i] | <= 10^9

// |nums2[i] | <= 10^9
let arr1=[1,2,3]
let arr2=[2,5,6]
merge(arr1,arr2)
function merge(a1,a2)
{
   let l1=0
   let l2=0

   let r=[]
   while(l1<a1.length && l2<a2.length)
   {
   if(a1[l1]<a2[l2])
   {
    r.push(a1[l1])
    l1++
   }
   else{
    r.push(a2[l2])
    l2++
   }
   }
   while(l1<a1.length)
   {
    r.push(a1[l1])
    l++;
   }
   while(l2<a2.length)
   {
    r.push(a2[l2])
    l2++
   }
   console.log(r)
}