// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

// Example 1:


// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 

// Constraints:

// 1 <= k <= points.length <= 104
// -104 <= xi, yi <= 104
class Node{
    constructor(ele)
    {
        this.pt=ele
        this.distance=ele[0]**2+ele[1]**2;

    }
}
class Heap{
    constructor()
    {
        this.data=[]
        
    }
    insert(ele)
    {
        // let dist=ele[0]**2+ele[1]**2;
        let node=new Node(ele) 
        this.data.push(node)
        let index=this.data.length-1
        let parent=Math.floor((index-1)/2)
        while(parent>=0)
        {
            if(this.data[index].distance>this.data[parent].distance)
            {
                [this.data[index],this.data[parent]]=[this.data[parent],this.data[index]]
               index=parent
               parent=Math.floor((parent-1)/2)
            }
            else{
                break;
            }
        }
        
    }
    heapify(i)
    {
     let largestIndex=i
     let left=(2*i)+1
     let right=left+1
     if(left<this.data.length && this.data[left].distance>this.data[largestIndex].distance)
     {
        largestIndex=left
     }
     if(right<this.data.length && this.data[right].distance>this.data[largestIndex].distance)
     {
        largestIndex=right
     }
     if(largestIndex!=i)
     {
        [this.data[largestIndex],this.data[i]]=[this.data[i],this.data[largestIndex]]
        this.heapify(largestIndex)
     }
    }
    poll()
    {
    let ele=this.data[0]
    this.data[0]=this.data[this.data.length-1]
    this.data.length=this.data.length-1
    this.heapify(0)
    return ele
    }
}
let points=[[3,3],[5,-1],[-2,4]]
let k=2
let h=new Heap()
for(let i=0;i<k;i++)
{
h.insert(points[i])
}
console.log(h.data)
for(let i=k;i<points.length;i++)
{
    h.insert(points[i])
    h.poll()
}
console.log(h.data)