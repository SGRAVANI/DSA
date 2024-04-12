// Given an unsorted array, find the Kth largest element in it.

// Note: The need is to find the Kth largest element in the sorted order.

// Input format
// First line has the integer N, representing the number of elements in the array

// Second line has N integers representing elements of the array

// Third line has K, which is the Kth largest element to be found

// Output format
// The Kth largest element value needs to be printed

// Constraints
// 1 <= N <= 1e5

// 0 <= Array Values <= 1e9

// 1 ≤ K ≤ N

// Sample Input 1
// 6

// 3 2 1 5 6 4

// 2

// Sample Output 1
// 5

// Explanation 1
// From the given input array, we have to find the second largest value. The first largest is 6 and the second largest is 5, which is the answer.

// Sample Input 2
// 9

// 3 2 3 1 2 4 5 5 6

// 4

// Sample Output 2
// 4

// Explanation 2
// From the given input array, we have to find the fourth largest value. The sorted order with the largest first is 6 5 5 4 3 3 2 2 1. The fourth largest here has the value 4.


class Heap{
  constructor()
  {
    this.data=[]
  }
  insert(ele)
  {
    this.data.push(ele)
    let index=this.data.length-1
    let parent=Math.floor((index-1)/2)
    while(parent>=0)
    {
        if(this.data[parent]>this.data[index])
        {
            [this.data[parent],this.data[index]]=[this.data[index],this.data[parent]]
            index=parent
            parent=Math.floor((index-1)/2)
        }
        else{
            break;
        }
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

  
  heapify(i)
  {
   let smallestIndex=i
   let leftChildIndex=(2*i)+1
   let rightChildIndex=leftChildIndex+1
   if(leftChildIndex<this.data.length && this.data[smallestIndex]>this.data[leftChildIndex])
   {
    //[this.data[smallestIndex],this.data]
    smallestIndex=leftChildIndex
   }
   if(rightChildIndex<this.data.length && this.data[smallestIndex]>this.data[rightChildIndex])
   {
    //[this.data[smallestIndex],this.data]
    smallestIndex=rightChildIndex
   }
   if(smallestIndex!=i)
   {
    [this.data[smallestIndex],this.data[i]]=[this.data[i],this.data[smallestIndex]]
    this.heapify(smallestIndex)
   }
  }
}
let h=new Heap()
let arr=[3, 2, 3 ,1 ,2 ,4 ,5, 5, 6]
let k=2
for(let i=0;i<k;i++)
{
    h.insert(arr[i])
}
console.log(h.data)
for(let i=k;i<arr.length;i++)
{
    h.insert(arr[i])
    h.poll()

}
console.log(h.data[0])
