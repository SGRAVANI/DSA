// Problem Description
// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

// Input format
// First line contains N, indicating the number of elements in the nums array.

// Next line contains N space separated integers.

// Output format
// Print N space separated integers, representing the counts array.

// Constraints
// 1 <= N <= 10^5

// |nums[i]| <= 10^5

// Sample Input 1
// 4

// 5 2 6 1

// Sample Output 1
// 2 1 1 0

// Explanation 1
// nums[0] is 5 → 2 and 1 are smaller, answer is 2

// nums[1] is 2 → 1 is smaller, answer is 1

// nums[2] is 6 → 1 is smaller, answer is 1

// nums[3] is 1 → there is no element smaller than 1, answer is 0

// Sample Input 2
// 5

// 3 1 3 1 4

// Sample Output 2
// 2 0 1 0 0

// Explanation 2
// nums[0] is 3 → 1 and 1 are smaller, answer is 2

// nums[1] is 1 → there is no element smaller than 1 to its right, answer is 0

// nums[2] is 3 → 1 is smaller, answer is 1

// nums[3] is 1 → there is no element smaller than 1 to its right, answer is 0

// nums[4] is 4 → there is no element smaller than 4 to its right answer is 0

// Resource

class SegmentTree{
    constructor(arr)
    {
        this.arr=arr;
        let max=Math.max(...arr);
        this.tree=new Array((max+1)*4).fill(0);
    }
    query(treeIndex,start,end,l,r)
    {
        if(end<l || r<start)
        {
            return 0
        }
        if(start==end)
        {
            return this.tree[treeIndex]
        }
        if(l<=start && end<=r)
        {
            return this.tree[treeIndex]
        }
        else{
            let mid=Math.floor((start+end)/2)
            let leftChildIndex=2*treeIndex+1
            let rightChildIndex=leftChildIndex+1;
            let leftSum=this.query(leftChildIndex,start,mid,l,r)
            let rightSum=this.query(rightChildIndex,mid+1,end,l,r)
            return leftSum+rightSum
        }
    }
    update(treeIndex,start,end,pos,val)
    {
        if(start==end)
        {
            // this.arr[pos]=val+1;
            console.log("index is : ",treeIndex)
            this.tree[treeIndex]=this.tree[treeIndex]+val
        }
        else{
            let mid=Math.floor((start+end)/2)
            let leftChildIndex=2*treeIndex+1
            let rightChildIndex=leftChildIndex+1
            if(start<=pos && pos<=mid)
            {
                this.update(leftChildIndex,start,mid,pos,val)
            }
            else{
                this.update(rightChildIndex,mid+1,end,pos,val)
            }
            this.tree[treeIndex]=this.tree[leftChildIndex]+this.tree[rightChildIndex];
        }
    }
}
let nums=[5, 2, 6, 1]
let sob=new SegmentTree(nums)

// for(let i=0;i<nums.length;i++)
// {
// sob.update(0,0,nums.length-1,i,nums[i])
// }
// console.log(sob.query(0,0,nums.length-1,1,3))
// console.log(sob.tree)
let inv=new Array(nums.length);
let start=0
let end=Math.max(...nums)
for(let i=nums.length-1;i>=0;i--)
{
    let l=0;
    let r=nums[i]-1
//to find sum of 0 to nums[i]
    let ans=sob.query(0,0,end,l,r)
    console.log(nums[i],ans)
    inv[i]=ans;
    let freqUpdateValue=1;
    sob.update(0,0,end,nums[i],freqUpdateValue)
}
console.log(inv)
//console.log(sob.tree)