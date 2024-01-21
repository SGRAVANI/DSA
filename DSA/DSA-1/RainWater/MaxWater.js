// You are given an array of N non-negative integers where each represents the height of a line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the diagram. Find two lines, which together with the x axis forms a container, such that the container holds the most water. Assume the width of lines to be negligible.

// Note: You may not slant the container and n is at least 2.

// image

// Input format
// The first line consists of an integer, N, denoting the size of the array.

// The second line consists of N space separated integers which denote the elements of the array,

// Output format
// Single integer denoting the capacity of the largest container.

// Constraints
// 2 <= N <= 10^6

// Sample Input 1
// 9

// 1 8 6 2 5 4 8 3 7

// Sample Output 1
// 49

// Explanation 1
// The lines of length 8 and 7 form a container that can hold 7*7=49 units of water. Here, the first 7 is the minimum of the two line heights and the second 7 is the number of units they are apart. This is the largest container that can be formed with the given input.

// Resource
// Container with most water - solution approach explained detailed

// Video : Container with most water solved

// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video

// let arr=[1,8,6,2,5,4,8,3,7]
// let lmax=[]
// lmax[0]=arr[0]
// let rmax=[]
// let ans=0
// rmax[arr.length-1]=arr[arr.length-1]
// for(let i=1;i<arr.length;i++)
// {
//     lmax[i]=Math.max(arr[i],lmax[i-1])
// }
// for(let i=arr.length-2;i>=0;i--)
// {
//     rmax[i]=Math.max(arr[i],rmax[i+1])
// }
// for(let i=0;i<arr.length-1;i++)
// {
//     ans=ans+(Math.min(lmax[i],rmax[i])-arr[i])
//     console.log(ans)
// }
// //console.log(lmax,rmax)
// console.log(ans)


//need to find area of every pair by using graph of array where height will be height of bar at y axis and x will repersent distance between bar from 1 to n
let height=[1, 8 ,6 ,2 ,5 ,4, 8, 3, 7]
let i=0;
let j=height.length-1;
let area=0;
let subWidth;
let subHeight;
while(i<j)
{
if(height[i]<=height[j])
{
subHeight=height[i];
subWidth=j-i;
area=Math.max(area,subHeight*subWidth)
i++;
// console.log(area)
}
else{
subHeight=height[j];
subWidth=j-i;
area=Math.max(area,subWidth*subHeight);
j--;
// console.log(area)
}
}
console.log(area)