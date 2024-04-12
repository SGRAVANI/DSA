// Problem Description
// Given an array A, where A[i] is the number of vacant seats in the ith row in a stadium.

// There are B people in a queue waiting to buy the tickets.

// Each seat costs equal to the number of vacant seats in the row it belongs to.

// The task is to maximize the profit by selling the tickets to B people.

// NOTE: If all the tickets are sold then rest have to go empty handed.

// Input format
// First line contains two space separated integers N and B.

// Second line contains N space separated integers representing the array A.

// Output format
// Print answer in a single line

// Sample Input 1
// 2 3

// 2 3

// Sample Output 1
// 7

// Explanation
// First ticket will be for any seat of second row will be sold for Rs 3.

// Second ticket will be for any seat of second row which will be sold for 2 because only 2 seats were left in the second row at that time.

// Third ticket will be for any seat in first row will be sold for 2.

// Constraints
// 1 <= N <= 100000

// 1 <= |A| <= 100000

// 1 <= B <= 200000

// Resources



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
          if(this.data[parent]<this.data[index])
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
     if(leftChildIndex<this.data.length && this.data[smallestIndex]<this.data[leftChildIndex])
     {
      //[this.data[smallestIndex],this.data]
      smallestIndex=leftChildIndex
     }
     if(rightChildIndex<this.data.length && this.data[smallestIndex]<this.data[rightChildIndex])
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
    arrToheap(arr)
    {
        this.data=[]
     for(let i=0;i<arr.length;i++)
     {
      this.data.push(arr[i])
     }
     let lastIndex=this.data.length-1;
     let lastParent=Math.floor((lastIndex-1)/2)
     for(let i=lastParent;i>=0;i--)
     {
        this.heapify(i)
     }

    }
  }
  let seats=[2, 3, 4, 5, 1]; 
  let b=  6 ;
  let h=new Heap()
  h.arrToheap(seats)
  console.log(h.data)
  let profit=0
  for(let i=1;i<=b;i++)
  {
    console.log(h.data)
  let price=h.poll()
  profit+=price;
  price-=1
  if(price>0)
  {
    h.insert(price)
  }

  }
  console.log(profit)